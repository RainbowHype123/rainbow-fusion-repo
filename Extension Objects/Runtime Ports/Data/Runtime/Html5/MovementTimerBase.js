//----------------------------------------------------------------------------------
//
// CRunMovementTimerBase : Movement Timer Base
//
//----------------------------------------------------------------------------------

CRunMovementTimerBase.ACT_SETMOVEMENTTIMERBASE = 0;

CRunMovementTimerBase.EXP_GETMOVEMENTTIMERBASE = 0;

function CRunMovementTimerBase()
{
	CRunExtension.call(this);
}

CRunMovementTimerBase.prototype = CServices.extend(new CRunExtension(),
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
		// N/A
	},

	condition: function (num, cnd)
	{
		return false;
	},

	action: function (num, act)
	{
		switch (num)
		{
			case CRunMovementTimerBase.ACT_SETMOVEMENTTIMERBASE:
			{
				var base = act.getParamExpression(this.rh, 0);
				base = Math.max(~~base, 0);
				this.ho.hoAdRunHeader.rhFrame.m_dwMvtTimerBase = base;
			};
		}
	},

	expression: function (num)
	{
		switch (num)
		{
			case CRunMovementTimerBase.EXP_GETMOVEMENTTIMERBASE:
			{
				return this.ho.hoAdRunHeader.rhFrame.m_dwMvtTimerBase;
			};
		}
		return 0;
	}
});