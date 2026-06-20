//----------------------------------------------------------------------------------
//
// CRuncommentor : Commentor Object
//
//----------------------------------------------------------------------------------

CRuncommentor.CND_COMMENT = 0;
//CRuncommentor.CND_LAST = 1;

CRuncommentor.ACT_COMMENT = 0;

function CRuncommentor()
{

}

CRuncommentor.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return 1;
	},

	createRunObject: function (file, cob, version)
	{
		this.parameters = new Array();
		return true;
	},

	// Removed the "on object destroyed" and "handle run object" functions, we'll see if that backfires or not

	condition: function (num, cnd)
	{
		switch (num)
		{
		case CRuncommentor.CND_COMMENT:
			return true;
		}
		return false;
	},

	action:           function (num, act)
	{
		switch (num)
		{
			case CRuncommentor.ACT_COMMENT:
				return true;
				//break;
		}
	},

	expression:         function (num)
	{
		return 0;
	}
});