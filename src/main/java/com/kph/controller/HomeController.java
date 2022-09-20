package com.kph.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/millo")
	public String milloFanGame() {
		return "millo";
	}
	
	@GetMapping("/namecard")
	public String namecard() {
		return "namecard";
	}
	
	@PostMapping("search")
	@ResponseBody
	public List<HashMap<String,Object>> search(@RequestParam HashMap<String,Object> param) {
		String address = (String) param.get("address");
		
		return getTokenId(address);
	}
	
	private List<HashMap<String,Object>> getTokenId(String address){
		List<HashMap<String,Object>> resultList = new ArrayList<>();
		
		try {
			
			URL url = new URL("https://th-api.klaytnapi.com/v2/contract/nft/0x46dbdc7965cf3cd2257c054feab941a05ff46488/owner/"+address+"?size=1000");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("x-chain-id", "8217");
			conn.setRequestProperty("Authorization", "Basic S0FTS0pWWUJFOE1YSjJIMTNINDVRODlaOl9IY181Q2pWeGdOSHJfY3psc1EzMm5HMUE0cy1rQ09tdmhRTXpNZWQ=");
			
			StringBuffer sb = new StringBuffer();
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
			
			String line = "";
			while((line = br.readLine()) != null) {
				sb.append(line);
			}
			conn.disconnect();
			
			
			JSONObject jsonObject = new JSONObject(sb.toString());
			JSONArray jsonArray = (JSONArray) jsonObject.get("items");
			
			for(int i=0; i<jsonArray.length(); i++) {
				JSONObject obj = jsonArray.getJSONObject(i);
				HashMap<String,Object> map = new ObjectMapper().readValue(obj.toString(), HashMap.class);
				
				url = new URL(map.get("tokenUri").toString());
				conn = (HttpURLConnection) url.openConnection();
				sb = new StringBuffer();
				br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
				
				line = "";
				while((line = br.readLine()) != null) {
					sb.append(line);
				}
				conn.disconnect();
				
				jsonObject = new JSONObject(sb.toString());
				map.put("name", jsonObject.get("name").toString());
				map.put("image", jsonObject.get("image").toString());
				
				String holdingDate = getHoldingDate(map);
				map.put("holdingDate", holdingDate);
				
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
				
				//홀딩시작일
				Timestamp timestamp = new Timestamp(Long.parseLong(holdingDate)*1000);
				Date startDate = new Date(timestamp.getTime());
				map.put("startDate", sdf.format(startDate));
				
				//현재일
				Date today = new Date(System.currentTimeMillis());
				map.put("today", sdf.format(today));
				
				//날짜 차이 저장
				Long diff = (today.getTime() - startDate.getTime());
				Long sec = diff / 1000;
				Long min = diff / (60*1000);
				Long hour = diff / (60*60*1000);
				Long day = sec / (24*60*60);
				map.put("sec", sec);
				map.put("min", min);
				map.put("hour", hour);
				map.put("day", day);
				
				resultList.add(map);
			}
			
			br.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return resultList;
	}
	
	private String getHoldingDate(HashMap<String,Object> param){
		String holdingDate = "";
		
		try {
			String owner = param.get("owner").toString();
			String tokenId = param.get("tokenId").toString();
			
			URL url = new URL("https://th-api.klaytnapi.com/v2/contract/nft/0x46dbdc7965cf3cd2257c054feab941a05ff46488/token/"+tokenId+"/history?size=1000");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("x-chain-id", "8217");
			conn.setRequestProperty("Authorization", "Basic S0FTS0pWWUJFOE1YSjJIMTNINDVRODlaOl9IY181Q2pWeGdOSHJfY3psc1EzMm5HMUE0cy1rQ09tdmhRTXpNZWQ=");
			
			StringBuffer sb = new StringBuffer();
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
			
			String line = "";
			while((line = br.readLine()) != null) {
				sb.append(line);
			}
			conn.disconnect();
			
			JSONObject jsonObject = new JSONObject(sb.toString());
			JSONArray jsonArray = (JSONArray) jsonObject.get("items");
			
			for(int i=0; i<jsonArray.length(); i++) {
				JSONObject obj = jsonArray.getJSONObject(i);
				HashMap<String,Object> map = new ObjectMapper().readValue(obj.toString(), HashMap.class);
				
				if(owner.equals(map.get("to").toString())) {
					holdingDate = map.get("timestamp").toString();
					break;
				}
				
			}
			
			br.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return holdingDate;
	}
}
