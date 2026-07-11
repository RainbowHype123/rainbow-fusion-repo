CRunactive_mirror.CND_LAST 			= 0;
function CRunactive_mirror(){
	this.t_address = 0;
	this.p_target = null;
	
	this.flg_x 	= 0;
	this.flg_y 	= 0;
	this.off_x 	= 0;
	this.off_y 	= 0;
	this.ac_x	= 0;
	this.ac_y	= 0;
}
CRunactive_mirror.prototype = 
{
	getNumberOfConditions: function (){
		return CRunactive_mirror.CND_LAST;
	},
	createRunObject: function (file, cob, version){
		this.ho.hoX = cob.cobX;
		this.ho.hoY = cob.cobY;
		return true;
	},
	destroyRunObject: function (bFast){
		this.t_address = null;
		this.p_target = null;
	},
	handleRunObject: function (){
		if( this.p_target != null ){
			this.ho.hoX = this.p_target.hoX;
			this.ho.hoY = this.p_target.hoY;
			this.ho.hoImgWidth = this.p_target.hoImgWidth;
			this.ho.hoImgHeight = this.p_target.hoImgHeight;
			this.ho.hoImgXSpot = this.p_target.hoImgXSpot;
			this.ho.hoImgYSpot = this.p_target.hoImgYSpot;
			this.ho.roc.rcAngle = this.p_target.roc.rcAngle;
		}
		return 0;
	},
	displayRunObject: function (context, xDraw, yDraw){
		if( this.p_target != null ){
			var scale_x = this.p_target.roc.rcScaleX;
			var scale_y = this.p_target.roc.rcScaleY;
			var x = xDraw + this.ho.hoX - this.rh.rhWindowX + this.ho.pLayer.x ;
			var y = yDraw + this.ho.hoY - this.rh.rhWindowY + this.ho.pLayer.y ;
			//var ctx = context._context;
            var r = this.p_target.roc.rcAngle;
            scale_x = this.p_target.roc.rcScaleX;
            scale_y = this.p_target.roc.rcScaleY;

            if (this.flg_x)
                scale_x = -scale_x;

            if (this.flg_y)
                scale_y = -scale_y;
            /*
            ctx.save();
			if( this.flg_x > 0 ){
				xDraw += this.off_x;
				x = x * -1;
				ctx.transform( -1 , 0 , 0 , 1 , 0 , 0 );
				r =  r* -1;
			}
			if( this.flg_y > 0 ){
				yDraw += this.off_y;
				y = y * -1;
				ctx.transform( 1 , 0 , 0 , -1 , 0 , 0 );
				r =  r* -1;
			}
            */
			var effect = this.p_target.ros.rsEffect;
			if((this.p_target.ros.rsFlags & 0x0008 )>0 || (this.p_target.ros.rsFlags & 0x0010)>0){
				effect |= CRSpr.BOP_SMOOTHING;
			}
			
			var ci = this.ho.hoAdRunHeader.rhApp.imageBank.images[ this.ho.hoAdRunHeader.rhApp.imageBank.handleToIndex[ this.p_target.roc.rcImage ] ];
            context.renderImage(ci, x, y, r, scale_x, scale_y, effect, this.p_target.ros.rsEffectParam);
			//ctx.restore();
		}
	},
	action: function (num, act){
		switch (num){
			case 0:	// SetFixed
				this.SetFixed( act.getParamExpression(this.rh, 0) );
				break;
			case 1:	// SetMirrorX
				this.flg_x = act.getParamExpression(this.rh, 0) ;
				this.ho.roc.rcImage = -1;
				break;
			case 2:	// SetMirrorY
				this.flg_y = act.getParamExpression(this.rh, 0) ;
				this.ho.roc.rcImage = -1;
				break;
			case 3:	// SetOffset
				this.off_x = act.getParamExpression(this.rh, 0) ;
				this.off_y = act.getParamExpression(this.rh, 1) ;
				this.ho.roc.rcImage = -1;
				break;
		}
	},
	condition: function (num, cnd){
		return false;
	},
	expression: function (num){
		switch (num){
			case 0:	//	getFixed
				return this.t_address;
			case 1:	//	getMirrorXFlag
				return this.flg_x;
			case 2:	//	getMirrorYFlag
				return this.flg_y;
			case 3:	//	getActionPointX
				this.UpdateActionPoint();
				return this.ac_x;
			case 4:	//	getActionPointY
				this.UpdateActionPoint();
				return this.ac_y;
		}
		return 0;
	},
	SetFixed: function( fixed ){
		this.t_address = fixed;
		this.p_target = 0;
		if( this.t_address != 0 ){
			var id = 0x0000FFFF & this.t_address;
			if( id < 0 || id > this.rhMaxObjects ) return ;
			var obj = this.ho.hoAdRunHeader.rhObjectList[id];
			if( obj == 0 || (obj.hoCreationId<<16)!=(0xFFFF0000 & this.t_address) ) return;
			this.p_target = obj;
			this.ho.hoX = obj.hoX;
			this.ho.hoX = obj.hoY;
		}
	},
	UpdateActionPoint: function(){
		if( this.p_target != 0 ){
			var r = this.p_target;
			if( this.ho.hoX != r.hoX || this.ho.hoY != r.hoY || this.ho.roc.rcAngle != r.roc.rcAngle || this.ho.roc.rcScaleX != r.roc.rcScaleX || this.ho.roc.rcScaleY != r.roc.rcScaleY || this.ho.roc.rcImage != r.roc.rcImage ){
				var ci = this.ho.hoAdRunHeader.rhApp.imageBank.images[ this.ho.hoAdRunHeader.rhApp.imageBank.handleToIndex[ r.roc.rcImage ] ];
				var shx = ci.xSpot;
				var shy = ci.ySpot;
				if( this.flg_x > 0) shx += this.off_x;
				if( this.flg_y > 0) shy += this.off_y;
				var r_hx = (ci.xAP - shx) * r.roc.rcScaleX;
				var r_hy = (ci.yAP - shy) * r.roc.rcScaleY;
				var r_z = Math.sqrt(r_hx*r_hx + r_hy*r_hy);
				if(this.flg_x > 0) r_hx *= -1.0 ;
				if(this.flg_y > 0) r_hy *= -1.0 ;
				var r_r = Math.atan2(r_hy, r_hx) ; 
				var rad = ((r.roc.rcAngle + 90) * (Math.PI / 180)) - r_r ;
				r_hx = Math.sin(rad) * r_z;
				r_hy = Math.cos(rad) * r_z;
				
				this.ac_x = this.ho.hoX + r_hx;
				this.ac_y = this.ho.hoY + r_hy;
				
				this.ho.hoX = r.hoX ;
				this.ho.hoY = r.hoY ;
				this.ho.roc.rcAngle = r.roc.rcAngle ;
				this.ho.roc.rcScaleX = r.roc.rcScaleX ;
				this.ho.roc.rcScaleY = r.roc.rcScaleY ;
				this.ho.roc.rcImage = r.roc.rcImage ;
			}
		}
	}
};

CServices.extend(CRunExtension, CRunactive_mirror);