//----------------------------------------------------------------------------------
//
// CRunkcRuntime : Runtime Object
//
//----------------------------------------------------------------------------------

CRunkcRuntime.CND_RTANACONDA = 0;
CRunkcRuntime.CND_RTANDROID = 1;
CRunkcRuntime.CND_RTEXESTANDARD = 2;
CRunkcRuntime.CND_RTEXEHWA = 3;
CRunkcRuntime.CND_RTIOS = 4;
CRunkcRuntime.CND_RTJAVA = 5;
CRunkcRuntime.CND_RTJAVAMOBILE = 6;
CRunkcRuntime.CND_RTMAC = 7;
CRunkcRuntime.CND_RTSWF = 8;
CRunkcRuntime.CND_RTXNA = 9;
CRunkcRuntime.CND_LAST = 10;

CRunkcRuntime.EXP_GETRTNAME = 0;

function CRunkcRuntime()
{
	this.parameters = null;
	this.ret = 0;
	this.bError = false;
}

CRunkcRuntime.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return CRunkcRuntime.CND_LAST;
	},

	createRunObject: function (file, cob, version)
	{
		this.parameters = new Array();
		return true;
	},

	condition: function (num, cnd)
	{
		switch (num)
		{
			case CRunkcRuntime.CND_RTANACONDA:
				return false;
			case CRunkcRuntime.CND_RTANDROID:
				return false;
			case CRunkcRuntime.CND_RTEXESTANDARD:
				return false;
			case CRunkcRuntime.CND_RTEXEHWA:
				return false;
			case CRunkcRuntime.CND_RTIOS:
				return false;
			case CRunkcRuntime.CND_RTJAVA:
				return false;
			case CRunkcRuntime.CND_RTJAVAMOBILE:
				return false;
			case CRunkcRuntime.CND_RTMAC:
				return false;
			case CRunkcRuntime.CND_RTSWF:
				return false;
			case CRunkcRuntime.CND_RTXNA:
				return false;
		}
		return false;
	},

	action:           function (num, act)
	{
		switch (num)
		{

		}
	},

	actResetParams:     function ()
	{
		this.parameters = null;
	},

	expression:         function (num)
	{
		switch (num)
		{
			case CRunkcRuntime.EXP_GETRTNAME:
				return "HTML5";
		}
		return 0;
	}
});