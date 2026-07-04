//----------------------------------------------------------------------------------
//
// CRunIntegerSplit : IntegerSplit object
//
//----------------------------------------------------------------------------------

CRunIntegerSplit.EXP_LOWORD = 0;
CRunIntegerSplit.EXP_HIWORD = 1;
CRunIntegerSplit.EXP_MAKELONG = 2;

function CRunIntegerSplit()
{
	CRunExtension.call(this);
}

CRunIntegerSplit.prototype = 
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
			case CRunIntegerSplit.EXP_LOWORD:
			{
				var x = this.ho.getExpParam();

				return x & 0xFFFF;
			};
			case CRunIntegerSplit.EXP_HIWORD:
			{
				var x = this.ho.getExpParam();

				return (x >>> 16) & 0xFFFF;
			};
			case CRunIntegerSplit.EXP_MAKELONG:
			{
				var low = this.ho.getExpParam();
				var high = this.ho.getExpParam();

				return (low & 0xFFFF) | ((high & 0xFFFF) << 16);
			};
		}
		return 0;
	}
};

CServices.extend(CRunExtension, CRunIntegerSplit);