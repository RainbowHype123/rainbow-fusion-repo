CRunIntroLoop.G_QUE = []; // push , shift
function CRunIntroLoop(){
	this.mode_flg = 0;
	this.t_ch = 0;
	this.lp_sid = -1;
	this.lp_cnt = -1;
	this.g_flg = false;
}
CRunIntroLoop.prototype = 
{
	getNumberOfConditions: function (){
		return 0;
	},
	createRunObject: function (file, cob, version){
		this.g_flg = file.readAInt();
		// global que trap
		if( this.g_flg ){
		}
		return true;
	},
	destroyRunObject: function (bFast){
		if( bFast && this.g_flg ){
			// global que trap
		}
	},
	handleRunObject: function (){
	},
	// -------------------------------------------------
	// Actions
	// -------------------------------------------------
	action: function (num, act){
		switch (num){
			case 0:
				this.PlayIntroLoop( act.evtParams[0].sndHandle , act.evtParams[1].sndHandle ,
				 					act.getParamExpression(this.rh, 2) , act.getParamExpression(this.rh, 3) );
				break;
		}
	},
	expression: function (num){
		switch (num){
			case 0:
				return this.mode_flg;
		}
		return 0;
	},
	PlayIntroLoop : function( intro_sid , loop_sid , ch_num , loop_cnt ){
		this.mode_flg = 1;
		this.t_ch = ch_num - 1;
		this.lp_sid = loop_sid;
		this.lp_cnt = loop_cnt;
		this.rh.rhApp.soundPlayer.play( intro_sid, 1, this.t_ch , 0 );
		var that = this;
		var f_ = this.rh.rhApp.soundPlayer.channels[this.t_ch].source["onended"];
		this.rh.rhApp.soundPlayer.channels[this.t_ch].source["onended"] = function(){
			that.rh.rhApp.soundPlayer.play( that.lp_sid, that.lp_cnt , that.t_ch , 0 );
			that.mode_flg = 0;
			f_();
		}
	}
};

CServices.extend(CRunExtension, CRunIntroLoop);