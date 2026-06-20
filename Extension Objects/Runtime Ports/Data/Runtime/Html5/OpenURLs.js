//----------------------------------------------------------------------------------
//
// CRunOpenURLs : OpenURLs Object
//
//----------------------------------------------------------------------------------

//CRunOpenURLs.CND_LAST = 0;

CRunOpenURLs.ACT_OPENURL = 0;

function CRunOpenURLs()
{
	
}

CRunOpenURLs.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return 0;
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
		return false;
	},

	action:           function (num, act)
	{
		switch (num)
		{
			case CRunOpenURLs.ACT_OPENURL:
				this.actOpenURL(act);
				break;
		}
	},

	actOpenURL:    function (act)
	{
		var url = act.getParamExpString(this.rh, 0);
		window.open(url, "_blank");
	},

	expression:         function (num)
	{
		return 0;
	}
	
});
