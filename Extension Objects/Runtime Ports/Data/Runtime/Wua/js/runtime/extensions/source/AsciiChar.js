//----------------------------------------------------------------------------------
//
// CRunAsciiChar : AsciiChar object
//
//----------------------------------------------------------------------------------

CRunAsciiChar.EXP_CHAR2INDEX = 0;
CRunAsciiChar.EXP_INDEX2CHAR = 1;

function CRunAsciiChar()
{
	CRunExtension.call(this);
}

CRunAsciiChar.prototype = 
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

	action: function (num, act)
	{
		// Returns nothing cause of no actions.
	},

	expression: function (num)
	{
		switch (num)
		{
			case CRunAsciiChar.EXP_CHAR2INDEX:
			{
				return text && text.length ? (text.charCodeAt(0) & 0xFF) : 0;
			};
			case CRunAsciiChar.EXP_INDEX2CHAR:
			{
				return String.fromCharCode(value & 0xFF);
			};
		}
		return 0;
	}
};

CServices.extend(CRunExtension, CRunAsciiChar);