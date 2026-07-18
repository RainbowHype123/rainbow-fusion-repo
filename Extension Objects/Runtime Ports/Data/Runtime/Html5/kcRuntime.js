//----------------------------------------------------------------------------------
//
// CRunKcRuntime : Runtime Object
//
//----------------------------------------------------------------------------------

CRunKcRuntime.CND_RTANACONDA = 0;
CRunKcRuntime.CND_RTANDROID = 1;
CRunKcRuntime.CND_RTEXESTANDARD = 2;
CRunKcRuntime.CND_RTEXEHWA = 3;
CRunKcRuntime.CND_RTIOS = 4;
CRunKcRuntime.CND_RTJAVA = 5;
CRunKcRuntime.CND_RTJAVAMOBILE = 6;
CRunKcRuntime.CND_RTMAC = 7;
CRunKcRuntime.CND_RTSWF = 8;
CRunKcRuntime.CND_RTXNA = 9;
CRunKcRuntime.CND_LAST = 10;

CRunKcRuntime.EXP_GETRTNAME = 0;

function CRunKcRuntime()
{
	
}

CRunKcRuntime.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return CRunKcRuntime.CND_LAST;
	},

	createRunObject: function (file, cob, version)
	{
		return true;
	},

	handleRunObject: function ()
	{
		return 0;
	},

	destroyRunObject: function (bFast)
	{
		
	},

	condition: function (num, cnd)
	{
		switch (num)
		{
			case CRunKcRuntime.CND_RTANACONDA:
				return false;
			case CRunKcRuntime.CND_RTANDROID:
				return false;
			case CRunKcRuntime.CND_RTEXESTANDARD:
				return false;
			case CRunKcRuntime.CND_RTEXEHWA:
				return false;
			case CRunKcRuntime.CND_RTIOS:
				return false;
			case CRunKcRuntime.CND_RTJAVA:
				return false;
			case CRunKcRuntime.CND_RTJAVAMOBILE:
				return false;
			case CRunKcRuntime.CND_RTMAC:
				return false;
			case CRunKcRuntime.CND_RTSWF:
				return false;
			case CRunKcRuntime.CND_RTXNA:
				return false;
		}
		return false;
	},

	expression:         function (num)
	{
		switch (num)
		{
			case CRunKcRuntime.EXP_GETRTNAME:
				return "HTML5";
		}
		return 0;
	}
});