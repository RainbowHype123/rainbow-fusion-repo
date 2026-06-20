//----------------------------------------------------------------------------------
//
// CRunAdvComment : Advanced Comment Object
//
//----------------------------------------------------------------------------------

CRunAdvComment.CND_COMMENT = 0;
CRunAdvComment.CND_OBJCOMMENT = 1;
CRunAdvComment.CND_TXTREGCOMMENT = 2;
CRunAdvComment.CND_TXTREGNOTE = 3;
CRunAdvComment.CND_TXTREGREMINDER = 4;
CRunAdvComment.CND_TXTREGIMPORTANT = 5;
CRunAdvComment.CND_TXTREGAAE = 6;
CRunAdvComment.CND_TXTCAPCOMMENT = 7;
CRunAdvComment.CND_TXTCAPNOTE = 8;
CRunAdvComment.CND_TXTCAPREMINDER = 9;
CRunAdvComment.CND_TXTCAPIMPORTANT = 10;
CRunAdvComment.CND_LAST = 11;

CRunAdvComment.ACT_COMMENT = 0;
CRunAdvComment.ACT_TXTREGCOMMENT = 1;
CRunAdvComment.ACT_TXTREGNOTE = 2;
CRunAdvComment.ACT_TXTREGREMINDER = 3;
CRunAdvComment.ACT_TXTREGIMPORTANT = 4;
CRunAdvComment.ACT_TXTREGAAA = 5;
CRunAdvComment.ACT_TXTREGAAB = 6;
CRunAdvComment.ACT_TXTCAPCOMMENT = 7;
CRunAdvComment.ACT_TXTCAPNOTE = 8;
CRunAdvComment.ACT_TXTCAPREMINDER = 9;
CRunAdvComment.ACT_TXTCAPIMPORTANT = 10;

function CRunAdvComment()
{
	
}

CRunAdvComment.prototype = CServices.extend(new CRunExtension(),
{
	getNumberOfConditions: function ()
	{
		return CRunAdvComment.CND_LAST;
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
			case CRunAdvComment.CND_COMMENT:
				return true;
			case CRunAdvComment.CND_OBJCOMMENT:
				return true;
			case CRunAdvComment.CND_TXTREGCOMMENT:
				return true;
			case CRunAdvComment.CND_TXTREGNOTE:
				return true;
			case CRunAdvComment.CND_TXTREGREMINDER:
				return true;
			case CRunAdvComment.CND_TXTREGIMPORTANT:
				return true;
			case CRunAdvComment.CND_TXTREGAAE:
				return true;
			case CRunAdvComment.CND_TXTCAPCOMMENT:
				return true;
			case CRunAdvComment.CND_TXTCAPNOTE:
				return true;
			case CRunAdvComment.CND_TXTCAPREMINDER:
				return true;
			case CRunAdvComment.CND_TXTCAPIMPORTANT:
				return true;
		}
		return false;
	},

	action:           function (num, act)
	{
		switch (num)
		{
			case CRunAdvComment.ACT_COMMENT:
				return true;
			case CRunAdvComment.ACT_TXTREGCOMMENT:
				return true;
			case CRunAdvComment.ACT_TXTREGNOTE:
				return true;
			case CRunAdvComment.ACT_TXTREGREMINDER:
				return true;
			case CRunAdvComment.ACT_TXTREGIMPORTANT:
				return true;
			case CRunAdvComment.ACT_TXTREGAAA:
				return true;
			case CRunAdvComment.ACT_TXTREGAAB:
				return true;
			case CRunAdvComment.ACT_TXTCAPCOMMENT:
				return true;
			case CRunAdvComment.ACT_TXTCAPNOTE:
				return true;
			case CRunAdvComment.ACT_TXTCAPREMINDER:
				return true;
			case CRunAdvComment.ACT_TXTCAPIMPORTANT:
				return true;
		}
	},

	expression:         function (num)
	{
		return 0;
	}
});