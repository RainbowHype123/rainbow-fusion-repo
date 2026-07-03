//----------------------------------------------------------------------------------
//
// CRunfmod : FMod object
//
//----------------------------------------------------------------------------------

CRunfmod.EXP_FLOATMODULUS = 0;

function CRunfmod()
{
	CRunExtension.call(this);
}

CRunfmod.prototype = 
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
			case CRunfmod.EXP_FLOATMODULUS:
			{
				var a = this.ho.getExpParam();
				var b = this.ho.getExpParam();
				
				if (b === 0)
					return 0;

				return a % b;
			};
		}
		return 0;
	}
};

CServices.extend(CRunExtension, CRunfmod);