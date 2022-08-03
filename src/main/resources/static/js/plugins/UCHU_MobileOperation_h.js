//=============================================================================
// UCHU_MobileOperation.js
// Version: 1.1.4
//----------------------------------------------------------------------------
// Copyright (c) 2015 uchuzine
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
@plugindesc
스마트폰조작용 플러그인. 세로화면보기, 가로화면보기에 대응하는 가상버튼,
터치조작의 방법을 추가추가확장하여, 스마트폰 플레이에 쾌적하도록 하였습니다.
@author
uchuzine
@help
UCHU_MobileOperation (Version: 1.1.4)
------------------------------------------------------------------------------
■업데이트 내용
------------------------------------------------------------------------------
1.1.4 2015/12/04  화면하부 메시지 표시후, 하기의 문제 재발생의 상황 수정
1.1.3 2015/11/29  화면 좌상단에 버튼을 배치했을 시 버튼이 눌리지 않는 문제수정
1.1.2 2015/11/24  파라미터를 변경할 수 없는 오작동 수정
1.1.1 2015/11/23  PC상의 대응버튼 조작 시 구동되지 않았던 경우를 수정
1.1.0 2015/11/17  「AnalogMove.js」사용 시 아날로그 이동 대응. 하기된 설명 참조
1.0.0 2015/11/15 플러그 인 공개

------------------------------------------------------------------------------
■특징
------------------------------------------------------------------------------
플러그인 작성에 있어、por Masked씨의MBS_MobileDirPad.js를 참고하고있습니다.

○이 플러그인의 특징
・게임화면 밖(검은부분)에 버튼을 설치되므로 플레이 화면에 간섭할 수 있습니다. 
・패드나 버튼은 별도 표시/숨기기가 가능합니다.
・버튼의 기준점을 화면모서리로 지정할 수 있어 세로화면 플레이조작에 대응됩니다.
・방향버튼의 조작성을 중시하므로, 터치판정 영역의 대각선 방향 감도 조정이 가능
　(아래의 설명 참조）
・방향 패드에 의한 이동과 디폴트 목적지 터치에 의한 이동의 병용이 가능함
・특정 터치 제서쳐에 의한 버튼조작의 확장

상기 기능을 활용하여、

・가상 십자키는 사용하지 않고 메뉴/결정버튼만의 사용
・버튼 전체를 사용하지 않과 화면을 길게 눌러 오토연타, 화면 외 터치메뉴 호출

등의 사용방법도 가능합니다.

------------------------------------------------------------------------------
■일부 파라미터의 설명
------------------------------------------------------------------------------
▼ DPad OpelationRange（방향패드 조작영역）‥‥
방향 패드 이미지의 표시 사이즈에 대한 터치판정 영역 사이즈 배율을 조정합니다.
수치를 높여도 외형은 비슷하지만, 이미지 중심에서 밖으로의 판정이 넓어집니다.
예)
「1」의 경우‥‥이미지의 크기가 터치판정의 영역(그림의 내경만)
「2」의 경우‥‥터치판정의 크기가 가로/세로 2배(그림의 밖의 50% 영역으로 확대)

수치를 올리는 것으로 조작미스를 방지하고 조작성을 높일 수 있지만,
너무 올려서 다른 버튼에 겹쳐지지 않도록 주의해 주십시오.

▼ DPad DiagonalRange(방향버튼의 대각선 방향 범위)‥‥
방향의 판정은 패드 대각선을 경계로 상하좌우로 나위어있습니다만,
이 수치를 높이면 대각성 위를 터치 시 그 양쪽 반경 on이 되어
（오른쪽+위 등), 8방향 판정이 가능합니다.
8방향 이동 플러그인을 사용하고 있을 경우 이 수치를 설정하여 주십시오.

숫자의 크기가 대각선 판정 각도의 넓이입니다. '0~1'의 범위에서 지정하여 주십시오.
예)
「0」의 경우‥‥상하좌우 4방향의 입력이 가능.
「0.5」의 경우‥균등한 8분할의 방향 입력이 가능.
「1」의 경우‥‥우상/우하 좌상 좌하의 4방향 입력.(X자 이동)

수치를 높일수록, "위를 누르려 했는데 우상단이 이동되는 등 실수가 있을 수 있기에
4방향 조작이 문제가 없는 경우, "0"으로 설정하여 조작미스를 최소화 할 수 있습니다.


（var1.1.0에 의한 추가사항）
▼ AnalogMove（아날로그 이동）‥‥
산시로님의 플러그인 「AnalogMove.js」플러그인 사용 시、아날로그 이동이 가능합니다.
방향버튼 중심으로부터 터치 위치의 거리와 각도로 도트단위 이동을 할 수 있습니다.
사용시 먼저 플러그인 매니져에서 먼저 「AnalogMove.js」를 얽어들이고
기쪽의 매개변수 「AnalogMove」를 true로 바꾸어 주십시오.
※아날로그 이동 사용 중에는,「DPad DiagonalRange」의 수치가 무시됩니다.

▼ AnalogSensitivity（입력감도）‥‥
「AnalogSensitivity」는 입력감도로 수치가 올라갈 수록 최대치(최대 스피드)까지의
입력하는 데 필요한 손가락의 움직임이 작아집니다.
예)
「1」의 경우‥‥입력판정의 바깥 끝의 최대값. 손가락의 넓은 이동범위가 필요.
「DPad OpelationRange」와 함께 사용 할 시‥‥방향버튼 그림의 바깥쪽 끝이 최대값.

DPad OpelationRange보다 더 크게 값을 지정해 주면 입력이 편해집니다.
（DPad OpelationRange의 초기치인 1.3에 대한, AnalogSensitivity의 초기치는1.8입니다.)

------------------------------------------------------------------------------
■패드, 버튼이미지에 대하여
------------------------------------------------------------------------------
・그림파일은 임의의 크기로 만들 수 있지만 비율은 1:1로 작성해 주십시오.
　표시 시에는 「DPad Size」로 지정한 픽셀 수로 리사이즈됩니다.
　버튼 이미지도 마찬가지입니다.
・방향버튼 그래픽의 중심이 이미지의 중심이 되도록 하여 주십시오.



@param ---PC Option---
@default

@param PC BtnDisplay
@desc PC로 실행할 시에도 가상버튼을 표시 (합니다:true 하지/않습니다:false)
초기치:false
@default false

@param PC TouchExtend
@desc PC로 실행시에도 터치조작 확장 사용 (합니다:true 하지/않습니다:false)
초기치:true;
@default true

@param ---File Path---
@default

@param DPad Image
@desc 방향패드 이미지 폴더
@default ./img/system/DirPad.png

@param ActionBtn Image
@desc 결정버튼 이미지 폴더
@default ./img/system/ActionButton.png

@param CancelBtn Image
@desc 취소버튼(메뉴버튼)이미지 폴더
@default ./img/system/CancelButton.png

@param ---Button Customize---
@default

@param Button Opacity
@desc 버튼 이미지 불투명도(0～1) 초기치:0.7
@default 0.7

@param Vertical BtnZoom
@desc 스마트폰 세로회전보기 시의 모든 버튼의 확대율
초기치:1.7
@default 1.7

@param Tablet BtnZoom
@desc 태블릿 가로보회전보기 시 모든 버튼의 확대율
초기치:0.8
@default 0.8

@param TabVertical BtnZoom
@desc 타블렉 세로회전 보기 시 모든 버튼의 확대율
初期値:1.1
@default 1.1

@param HideButton OnMessage
@desc 화면하부 메시지 표시 시, 가상버튼의 표시 순서를 게임화면 아래로 낮춤 (네:true/그대로:false)
초기치:true
@default true

@param DPad Visible
@desc 방향패드를 표시 (네：true/하지 않음:false), 초기치:true
@default true

@param DPad Size
@desc 방향패드 이미지 크기(픽셀단위）。 초기치:200
@default 200

@param DPad Margin
@desc 방향패드 이미지의 위치. 화면 가장자리의 틈새(검은화면) 크기로 지정
 (좌측기준의 폭; 하단기준의 폭) 초기치:10; 10
@default 10; 10

@param DPad Orientation
@desc 방향패드의 기준 위치를 왼쪽 이외에서 바꾸고 싶을 떄
left 나 right; top 나 bottom 으로 지정. 초기치:left; bottom
@default left; bottom

@param DPad OpelationRange
@desc 방향패드이미지에 대응하는 터치의 작동범위(배율 1 부터~)
이미지의 바깥에 터치판정을 확대하여 조작미스를 방지 . 초기치:1.3
@default 1.3

@param DPad DiagonalRange
@desc 방향패드 대각선 방향 판정의 범위(0～1)。대각선으로 들어가기 쉽게 할수록 조작이 치우치기 쉽게 됩니다. 4방향 이동을 사용시에는 0으로.초기치:0.3;
@default 0.3

@param ActionBtn Visible
@desc 결정버튼을 표시 (합니다:true/하지 않습니다.:false)  초기치:true
@default true

@param ActionBtn Size
@desc 결정버튼의 크기(px）。 초기치:100
@default 100

@param ActionBtn Margin
@desc 결정버튼의 위치. 이미지 끝에서부터 중심까지의 간격 크기를 지정합니다.
 (오른쪽으로부터의 폭; 아래로부터의 폭) 초기치:10; 90
@default 10; 90

@param ActionBtn Orientation
@desc 결정버튼의 기준위치를 오른쪽 하단 이외의 위치로 바꾸고 싶을 경우.
left 나 right; top 나 bottom 으로 지정。 초기치:right; bottom
@default right; bottom

@param CancelBtn Visible
@desc 캔슬(메뉴버튼)의 표시 (합니다:true/안합니다:false)
초기치:true
@default true

@param CancelBtn Size
@desc 캔슬버튼의 사이즈(px）。 초기치:100
@default 100

@param CancelBtn Margin
@desc 캔슬버튼의 위치. 화면 가장자리로부터의 간격 크기 지정.
 (오른쪽으로부터 폭; 아래쪽으로부터 폭) 초기치:110; 10
@default 110; 10

@param CancelBtn Orientation
@desc 캔슬버튼의 기준위치를 、오른쪽 하단 이외의 위치로 변경하고자 할 경우.
left 나 right; top 나 bottom으로 지정. 초기치:right; bottom
@default right; bottom


@param ---TouchInput Extend---
@default 

@param Flick PageUp-PageDown
@desc 화면상의 좌 우로 탭하여, PageUp/PageDown조작.
스테이터스 화면에 캐릭터를 전환하고 싶을 때 등의 경우. 초기치:true
@default true

@param HoldCanvas ActionBtn
@desc 화면을 길게 누르면, 결정버튼을 누른 상태가 됨.
초기치:true
@default true

@param OutCanvas CancelBtn
@desc 게임화면 외의 검은 틈새부분 전체가 캔슬버튼으로 작동.
초기치:false
@default false

@param OutCanvas ActionBtn
@desc 게임화면 외의 검은 틈새부분 전체가 결정버튼으로 작동.
초기치:false
@default false

@param --!need AnalogMove.js!--
@default

@param Analog Move
@desc [※AnalogMove.js를 먼저 읽어들일 수 있도록 하여 주십시오.]
방향패드로 아날로그 이동가 가능하도록 함. 초기치:false
@default false

@param Analog Sensitivity
@desc 아날로그 입력의 입력 감도. 수키가 높아질 수록, 미세한 조작에 대해 캐릭터가 많이 움직임.
초기치:1.8
@default 1.8

*/

var Imported = Imported || {};
Imported.UCHU_MobileOperation = "1.1.4";

var UCHU_MobileOperation = {};

(function() {
    "use strict";
	
	//-----------------------------------------------------------------------------
	// Setup
	
	var Parameters = PluginManager.parameters('UCHU_MobileOperation');
	var PRM = PRM || {};
	
	PRM.url=[];
	PRM.visible=[];
	PRM.size=[];
	PRM.pos=[];
	PRM.spot=[];
	
	PRM.pcBtn = Boolean(Parameters["PC BtnDisplay"] === 'true' || false);
	PRM.pcExt = Boolean(Parameters["PC TouchExtend"] === 'true' || false);
	PRM.url[0] = String(Parameters["DPad Image"]);
	PRM.url[1] = String(Parameters["ActionBtn Image"]);
	PRM.url[2] = String(Parameters["CancelBtn Image"]);
	PRM.opacity = Number(Parameters["Button Opacity"]);
	PRM.vZoom = Number(Parameters["Vertical BtnZoom"]);
	PRM.tabZoom = Number(Parameters["Tablet BtnZoom"]);
	PRM.tabvZoom = Number(Parameters["TabVertical BtnZoom"]);
	PRM.hideBtn = Boolean(Parameters["HideButton OnMessage"] === 'true' || false);
	PRM.visible[0] = Boolean(Parameters["DPad Visible"] === 'true' || false);
	PRM.size[0] = Number(Parameters["DPad Size"]);
	PRM.pos[0] =Parameters["DPad Margin"].split(";");
	PRM.spot[0] = Parameters["DPad Orientation"].split(";");
	PRM.pad_scale = Number(Parameters["DPad OpelationRange"]);
	PRM.pad_dia = Math.max(0,Math.min(1,(1-Number(Parameters["DPad DiagonalRange"]))));
	PRM.visible[1] = Boolean(Parameters["ActionBtn Visible"] === 'true' || false);
	PRM.size[1] = Number(Parameters["ActionBtn Size"]);
	PRM.pos[1] = Parameters["ActionBtn Margin"].split(";");
	PRM.spot[1] = Parameters["ActionBtn Orientation"].split(";");
	PRM.visible[2] = Boolean(Parameters["CancelBtn Visible"] === 'true' || false);
	PRM.size[2] = Number(Parameters["CancelBtn Size"]);
	PRM.pos[2] = Parameters["CancelBtn Margin"].split(";");
	PRM.spot[2] = Parameters["CancelBtn Orientation"].split(";");
	PRM.flickpage = Boolean(Parameters["Flick PageUp-PageDown"] === 'true' || false);
	PRM.holdaction = Boolean(Parameters["HoldCanvas ActionBtn"] === 'true' || false);
	PRM.outcansel = Boolean(Parameters["OutCanvas CancelBtn"] === 'true' || false);
	PRM.outaction = Boolean(Parameters["OutCanvas ActionBtn"] === 'true' || false);
	PRM.analogmove = Boolean(Parameters["Analog Move"] === 'true' || false);
	PRM.sensitivity = Number(Parameters["Analog Sensitivity"]);
	
	var btn_id=["DirPad","ok","escape"];
	var current_zoom=1;	
	var st_x = 0;
	var st_y = 0;
	var pad_range=PRM.size[0]*PRM.pad_scale;
	var pad_size=pad_range*current_zoom/2;
	var Btn_ready=false;
	var Btn_hide=false;
	var PressBtn=false;
	var dirx=0;
	var diry=0;
	var touchx=0;
	var touchy=0;
	var autofire=false;
	var hvzoom=[1, PRM.vZoom];
	var ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1
	  };
	})(window.navigator.userAgent.toLowerCase());

	if(ua.Tablet){
		hvzoom=[PRM.tabZoom, PRM.tabvZoom];
	}
	if (!Utils.isMobileDevice() && !PRM.pcBtn) {PRM.visible[0]=PRM.visible[1]=PRM.visible[2]=false;}

	//-----------------------------------------------------------------------------
	// Locate_DirPad

	function Locate_DirPad() {
		this.initialize.apply(this, arguments);
	}


	Locate_DirPad.prototype.initialize = function() {
		var img = new Image();
		var url = PRM.url[0];
		img.onerror = function() {Graphics.printError('DirPad Image was Not Found:',url);};
		img.src = url;
		img = null;
		this.Div = document.createElement("div");
		this.Div.id = 'Dirpad';
		this.Div.style.position = 'fixed';
		this.Div.style[PRM.spot[0][0].replace(/\s+/g, "")] = String(PRM.pos[0][0]-(pad_range-PRM.size[0])/2)+'px';
		this.Div.style[PRM.spot[0][1].replace(/\s+/g, "")] = String(PRM.pos[0][1]-(pad_range-PRM.size[0])/2)+'px';
		this.Div.style.width = pad_range+'px';
		this.Div.style.height = pad_range+'px';
		this.Div.style.opacity = PRM.opacity;
		this.Div.style.zIndex = '11';
		this.Div.style.userSelect="none";
		this.Div.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)";
		this.Div.style.background = 'url('+PRM.url[0]+') 50% 50% / '+String(Math.round(PRM.size[0]/pad_range*100))+'% no-repeat';
		
		if(!Utils.isMobileDevice() && PRM.pcBtn){
			this.Div.addEventListener('mousedown', function(e) {
			  if (!SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,true);PressBtn=true;}
			}, false);
			this.Div.addEventListener('mousemove', function(e) {
			  if(PressBtn && !SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,false);}
			}, false);
			this.Div.addEventListener('mouseup', function() {
				disope();PressBtn=false;
			}, false);
			this.Div.addEventListener('mouseout', function() {
			    disope();PressBtn=false;
			}, false);
		}
		this.Div.addEventListener('touchstart', function(e) {
			PressBtn=true;
			if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,true)};
		}, false);
		this.Div.addEventListener('touchmove', function(e) {
			if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,false)};
			PressBtn=true;
		}, false);
		this.Div.addEventListener('touchend', function() {
			disope();PressBtn=false;
		}, false);
			document.body.appendChild(this.Div);
	};
	
	function dirope(xx,yy,st) {
		touchx=(xx-pad_size)/pad_size;
		touchy=(yy-pad_size)/pad_size;
		if(st && Math.sqrt(touchx*touchx+touchy*touchy)>1){
			disope();
		}else{
			if(touchx>Math.abs(touchy)*PRM.pad_dia){Input._currentState['right']=true;Input._currentState['left']=false;}
			else if(touchx<-Math.abs(touchy)*PRM.pad_dia){Input._currentState['left']=true;Input._currentState['right']=false;}
			else{Input._currentState['left']=false;Input._currentState['right']=false;}
			if(touchy>Math.abs(touchx)*PRM.pad_dia){Input._currentState['down']=true;Input._currentState['up']=false;}
			else if(touchy<-Math.abs(touchx)*PRM.pad_dia){Input._currentState['up']=true;Input._currentState['down']=false;}
			else{Input._currentState['up']=false;Input._currentState['down']=false;}
		}
	}
	function disope() {
		touchx=0; touchy=0;
		Input._currentState['up']=false;
		Input._currentState['down']=false;
		Input._currentState['left']=false;
		Input._currentState['right']=false;
	}
	
	//-----------------------------------------------------------------------------
	// Locate_Button

	function Locate_Button() {
		this.initialize.apply(this, arguments);
	}
	Locate_Button.prototype.initialize = function(type) {
		var img = new Image();
		var url = PRM.url[type];
		img.onerror = function() {Graphics.printError('Button Image was Not Found:',url);};
		img.src = url;
		img = null;
		this.Div = document.createElement("div");
		this.Div.id = btn_id[type]+'Btn';
		this.Div.style.position = 'fixed';
		this.Div.style[PRM.spot[type][0].replace(/\s+/g, "")] = PRM.pos[type][0]+'px';
		this.Div.style[PRM.spot[type][1].replace(/\s+/g, "")] = PRM.pos[type][1]+'px';
		this.Div.style.width = PRM.size[type]+'px';
		this.Div.style.height = PRM.size[type]+'px';
		this.Div.style.opacity = PRM.opacity;
		this.Div.style.zIndex = '11';
		this.Div.style.userSelect="none";
		this.Div.style.background = 'url('+PRM.url[type]+') 0 0 / cover no-repeat';
		
		if(!Utils.isMobileDevice() && PRM.pcBtn){
			this.Div.addEventListener('mousedown', function() {
				Input._currentState[btn_id[type]] = true;PressBtn=true;
			}, false);
			this.Div.addEventListener('mouseover', function() {
			  if(TouchInput.isPressed()){Input._currentState[btn_id[type]] = true;PressBtn=true;return false;}
			}, false);
			this.Div.addEventListener('mouseup', function() {
			  Input._currentState[btn_id[type]] = false;PressBtn=false;
			}, false);
			this.Div.addEventListener('mouseout', function() {
			  Input._currentState[btn_id[type]] = false;PressBtn=false;
			}, false);
		}
		
		this.Div.addEventListener('touchstart', function() {
			if (!SceneManager.isSceneChanging()){Input._currentState[btn_id[type]] = true;PressBtn=true;}
		}, false);
		this.Div.addEventListener('touchend', function() {
			Input._currentState[btn_id[type]] = false;PressBtn=false;
		}, false);
		
		document.body.appendChild(this.Div);
	};

	//-----------------------------------------------------------------------------
	// Replace function
			
	var Scene_Base_start = Scene_Base.prototype.start;
	Scene_Base.prototype.start = function() {
		Scene_Base_start.call(this);
	    if (Utils.isMobileDevice() || PRM.pcBtn) {
			if(!Btn_ready){
				Btn_ready=true;
				if(PRM.visible[0]){this.DirPad = new Locate_DirPad();}
				if(PRM.visible[1]){this.okButton = new Locate_Button(1);}
				if(PRM.visible[2]){this.canselButton = new Locate_Button(2);}
				Graphics._updateRealScale();
				document.documentElement.style["-webkit-user-select"]="none";
				document.addEventListener("touchmove", function(evt) {evt.preventDefault();}, false);
			}
		}
	};
		
	if(PRM.visible[0] || PRM.visible[1] || PRM.visible[2]){
	
		var Game_Temp_setDestination = Game_Temp.prototype.setDestination;
		Game_Temp.prototype.setDestination = function(x, y) {
			Game_Temp_setDestination.apply(this, arguments);
			if(PressBtn){
				this._destinationX = null;
				this._destinationY = null;
			}
		};
		
		var Graphics_updateRealScale = Graphics._updateRealScale;
		Graphics._updateRealScale = function() {
			Graphics_updateRealScale.call(this);
			if (this._stretchEnabled) {
				if(document.getElementById("Dirpad")){
				if(window.innerWidth<window.innerHeight){current_zoom=hvzoom[1];}else{current_zoom=hvzoom[0];}
					pad_size=pad_range*current_zoom/2;
					if(PRM.visible[0]){
						document.getElementById("Dirpad").style.zoom=current_zoom;
						dirx=document.getElementById("Dirpad").offsetLeft*current_zoom;
						diry=document.getElementById("Dirpad").offsetTop*current_zoom;
					}
					if(PRM.visible[1]){document.getElementById("okBtn").style.zoom=current_zoom;}
					if(PRM.visible[2]){document.getElementById("escapeBtn").style.zoom=current_zoom;}
				}
			}
		};
	}
	
	//-----------------------------------------------------------------------------
	// Option

	if(PRM.hideBtn){
		Scene_Base.prototype.hideUserInterface = function() {
			if (Utils.isMobileDevice() || PRM.pcBtn) {Btn_hide=true;
				if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '0';}
				if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '0';}
				if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '0';}
			}
		};
		Scene_Base.prototype.showUserInterface = function() {
			if (Utils.isMobileDevice() && !Btn_hide || PRM.pcBtn && !Btn_hide) {
				if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '11';}
				if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '11';}
				if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '11';}
			}
		};
	
		var Scene_Map_createMessageWindows = Scene_Map.prototype.createMessageWindow;
		var Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
		var Scene_Map_terminate = Scene_Map.prototype.terminate;
		
		Scene_Map.prototype.createMessageWindow = function() {
			Scene_Map_createMessageWindows.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			var scene = this;
			
			this._messageWindow.startMessage = function() {	
				oldStartMessage.apply(this, arguments);
				if($gameMessage.positionType()==2){
					scene.hideUserInterface();
				}
			};
			Window_Message.prototype.terminateMessage = function() {
				oldTerminateMessage.apply(this, arguments);
				Btn_hide=false;
				setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			};
		};
		
		var Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
		Scene_Battle.prototype.createMessageWindow = function() {
			Scene_Battle_createMessageWindow.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			var scene = this;
			this._messageWindow.startMessage = function() {
				oldStartMessage.apply(this, arguments);
				if($gameMessage.positionType()==2){
					scene.hideUserInterface();
				}
			};
			Window_Message.prototype.terminateMessage = function() {
				oldTerminateMessage.apply(this, arguments);
				Btn_hide=false;
				setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			};
		};
	}

	if(Utils.isMobileDevice() || PRM.pcExt){
		if(PRM.holdaction){
			var TouchInput_update = TouchInput.update;
			TouchInput.update = function() {
				TouchInput_update.call(this);
				if (!PressBtn && TouchInput.isLongPressed()) {
					Input._currentState['ok']=true;autofire=true;
				}
				if(!TouchInput.isPressed() && autofire){
					Input._currentState['ok']=false;autofire=false;
				}
			};
		}
		
		if(PRM.flickpage || PRM.outcansel || PRM.outaction){
			TouchInput._endRequest= function(type) {
				Input._currentState[type]=false;
			}
			if(Utils.isMobileDevice()){
				var TouchInput_onTouchStart = TouchInput._onTouchStart;
				TouchInput._onTouchStart = function(event) {
				    TouchInput_onTouchStart.apply(this, arguments);
					var touch = event.changedTouches[0];
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(touch.pageX);
						st_y = Graphics.pageToCanvasY(touch.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}else{
				var TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
				TouchInput._onLeftButtonDown = function(event) {
					TouchInput_onLeftButtonDown.apply(this, arguments);
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(event.pageX);
						st_y = Graphics.pageToCanvasY(event.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}
		}
			
		if(PRM.flickpage){
			var TouchInput_onMove = TouchInput._onMove;
			TouchInput._onMove = function(x, y) {
				TouchInput_onMove.apply(this, arguments);
				if(!PressBtn){
					if((st_x-x)<-50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pageup']=true;setTimeout("TouchInput._endRequest('pageup');", 100);}
					if((st_x-x)>50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pagedown']=true;setTimeout("TouchInput._endRequest('pagedown');", 100);}
				}
			}
		}
	}
	
	//AnalogMove.js
	if(PRM.analogmove && Utils.isMobileDevice() || PRM.analogmove && PRM.pcBtn){
		Input.leftStick = function() {
			var threshold = 0.1;
			var x = touchx;
			var y = touchy;
			var tilt = Math.min(1,Math.sqrt(touchx*touchx+touchy*touchy)*PRM.sensitivity);
			var direction = 0.0;
			if (x === 0.0) {
				direction = (-y > 0 ? Math.PI * 0.0 : Math.PI * 1.0);
			} else if (y === 0.0) {
				direction = (-x > 0 ? Math.PI * 0.5 : Math.PI * 1.5);
			} else {
				direction = Math.atan2(-x, -y);
			}
			return {tilt: tilt, direction: direction};
		};
	}
})(UCHU_MobileOperation);

