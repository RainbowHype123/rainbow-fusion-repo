//----------------------------------------------------------------------------------
//
// CRunascii : ASCII Object
//
//----------------------------------------------------------------------------------

CRunascii.EXP_INT2CHAR = 0;
CRunascii.EXP_CHAR2INT = 1;

function CRunascii()
{
	CRunExtension.call(this);
}

CRunascii.prototype = CServices.extend(new CRunExtension(),
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
			case CRunascii.EXP_INT2CHAR:
			{
				var value = this.ho.getExpParam();
				
				return String.fromCharCode(value & 0xFF);
			};
			case CRunascii.EXP_CHAR2INT:
			{
				var text = this.ho.getExpParam();
				
				return text && text.length ? (text.charCodeAt(0) & 0xFF) : 0;
			};
		}
		return 0;
	}
});