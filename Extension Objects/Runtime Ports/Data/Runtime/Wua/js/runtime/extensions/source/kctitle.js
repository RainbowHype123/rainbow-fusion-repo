//----------------------------------------------------------------------------------
//
// CRunkctitle : Titlebar Object
//
//----------------------------------------------------------------------------------

CRunkctitle.CND_COMPARETITLE = 0;
//CRunkctitle.CND_LAST = 1;

CRunkctitle.ACT_SETTITLE = 0;

CRunkctitle.EXP_GETTITLE = 0;

function CRunkctitle()
{
	CRunExtension.call(this);
}

CRunkctitle.prototype = 
{
	getNumberOfConditions: function ()
	{
		return 1;
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
			case CRunkctitle.CND_COMPARETITLE:
				return cnd.getParamExpString(this.rh, 0) ==/*=*/ Runtime.getWindowTitle();
		}
		return false;
	},

	action: function (num, act)
	{
		switch (num)
		{
			case CRunkctitle.ACT_SETTITLE:
				return Runtime.setWindowTitle(act.getParamExpString(this.rh, 0));
		}
	},

	expression: function (num)
	{
		switch (num)
		{
			case CRunkctitle.EXP_GETTITLE:
				return Runtime.getWindowTitle();
		}
		return 0;
	}
};

CServices.extend(CRunExtension, CRunkctitle);