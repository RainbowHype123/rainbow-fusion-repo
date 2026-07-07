//----------------------------------------------------------------------------------
//
// CRunBitwiser.js
// Created by Danny Worth (2017)
//
//----------------------------------------------------------------------------------

// Unofficial UWP port by RainbowHype. Based heavily on the Html5 port.

// Conditions
CRunBitwiser.CND_ISFLAGSET = 0;
CRunBitwiser.CND_LAST = 1;

// Actions (none)

// Expressions
CRunBitwiser.EXP_OR32 =						0;
CRunBitwiser.EXP_XOR32 =					1;
CRunBitwiser.EXP_AND32 =					2;
CRunBitwiser.EXP_NOT32 =					3;
CRunBitwiser.EXP_ROL32 =					4;
CRunBitwiser.EXP_ROR32 =					5;
CRunBitwiser.EXP_LSH32 =					6;
CRunBitwiser.EXP_RSH32 =					7;
CRunBitwiser.EXP_OR16 =						8;
CRunBitwiser.EXP_XOR16 =					9;
CRunBitwiser.EXP_AND16 =					10;
CRunBitwiser.EXP_NOT16 =					11;
CRunBitwiser.EXP_ROL16 =					12;
CRunBitwiser.EXP_ROR16 =					13;
CRunBitwiser.EXP_LSH16 =					14;
CRunBitwiser.EXP_RSH16 =					15;
CRunBitwiser.EXP_OR8 =						16;
CRunBitwiser.EXP_XOR8 =						17;
CRunBitwiser.EXP_AND8 =						18;
CRunBitwiser.EXP_NOT8 =						19;
CRunBitwiser.EXP_ROL8 =						20;
CRunBitwiser.EXP_ROR8 =						21;
CRunBitwiser.EXP_LSH8 =						22;
CRunBitwiser.EXP_RSH8 =						23;
CRunBitwiser.EXP_SETBITFLAG =				24;
CRunBitwiser.EXP_CLEARBITFLAG =				25;
CRunBitwiser.EXP_TOGGLEBITFLAG =			26;
CRunBitwiser.EXP_EMBEDVALUE =				27;
CRunBitwiser.EXP_RETRIEVEEMBEDDEDVALUE =	28;
CRunBitwiser.EXP_SIGNED8 =					29;
CRunBitwiser.EXP_SIGNED16 =					30;

function CRunBitwiser()
{

}

CRunBitwiser.prototype =
{
	getNumberOfConditions:function()
	{
		return CRunBitwiser.CND_LAST;
	}, // Don't forget the comma between each function
		
	createRunObject:function(file, cob, version)
	{
		return true;
	},
		
	handleRunObject: function()
	{
		return 0; // The object will be called next loop
	},

	destroyRunObject: function(bFast)
	{
		
	},

	displayRunObject:function(renderer, xDraw, yDraw)
	{

	},

	pauseRunObject: function ()
	{

	},

	continueRunObject: function ()
	{

	},

	getRunObjectFont: function()
	{
		return null;
	},

	setRunObjectFont: function(font, rc)
	{

	},

	getRunObjectTextColor: function()
	{
		return 0;
	},

	setRunObjectTextColor: function(color)
	{

	},
		
	IsFlagSet: function(Flag, Value)
	{
		workingFlag = 1 << (Flag % 32);	
		return ((Value & workingFlag) != 0) ? true : false;
	},
	
	GetBitMask: function(bits)
	{
		mask = 0;
		for (i = 0; i < bits; i++)
		{
			mask <<= 1;
			mask |= 1;
		}
		return mask;
	},

	condition:function(num, cnd)
	{
		switch (num)
		{
			case CRunBitwiser.CND_ISFLAGSET:
				return this.IsFlagSet(cnd.getParamExpression(this.rh, 0), cnd.getParamExpression(this.rh, 1));
		}
		return false;
	},

	action:function(num, act)
	{

	},

	expression: function(num)
	{
		switch (num)
		{
            case CRunBitwiser.EXP_OR32:
                return (this.OR32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_XOR32:
				return (this.XOR32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_AND32:
				return (this.AND32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_NOT32:
				return (this.NOT32(this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROL32:
				return (this.ROL32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROR32:
				return (this.ROR32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_LSH32:
				return (this.LSH32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_RSH32:
				return (this.RSH32(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_OR16:
				return (this.OR16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_XOR16:
				return (this.XOR16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_AND16:
				return (this.AND16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_NOT16:
				return (this.NOT16(this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROL16:
				return (this.ROL16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROR16:
				return (this.ROR16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_LSH16:
				return (this.LSH16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_RSH16:
				return (this.RSH16(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_OR8:
				return (this.OR8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_XOR8:
				return (this.XOR8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_AND8:
				return (this.AND8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_NOT8:
				return (this.NOT8(this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROL8:
				return (this.ROL8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_ROR8:
				return (this.ROR8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_LSH8:
				return (this.LSH8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_RSH8:
				return (this.RSH8(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_SETBITFLAG:
				return (this.SetBitFlag(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_CLEARBITFLAG:
				return (this.ClearBitFlag(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_TOGGLEBITFLAG:
				return (this.ToggleBitFlag(this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_EMBEDVALUE:
				return (this.EmbedValue(this.ho.getExpParam(), this.ho.getExpParam(), this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_RETRIEVEEMBEDDEDVALUE:
				return (this.RetrieveEmbeddedValue(this.ho.getExpParam(), this.ho.getExpParam(), this.ho.getExpParam()));
			case CRunBitwiser.EXP_SIGNED8:
				return (this.Signed8(this.ho.getExpParam()));
			case CRunBitwiser.EXP_SIGNED16:
				return (this.Signed16(this.ho.getExpParam()));
		}
		return 0;
	},
	
	OR32: function(FirstValue, SecondValue)
	{
		return FirstValue | SecondValue;
	},
	
	OR16: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFFFF) | (SecondValue & 0xFFFF);
	},
	
	OR8: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFF) | (SecondValue & 0xFF);
	},

	XOR32: function(FirstValue, SecondValue)
	{
		return FirstValue ^ SecondValue;
	},
	
	XOR16: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFFFF) ^ (SecondValue & 0xFFFF);
	},
	
	XOR8: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFF) ^ (SecondValue & 0xFF);
	},
	
	AND32: function(FirstValue, SecondValue)
	{
		return FirstValue & SecondValue;
	},
	
	AND16: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFFFF) & (SecondValue & 0xFFFF);
	},
	
	AND8: function(FirstValue, SecondValue)
	{
		return (FirstValue & 0xFF) & (SecondValue & 0xFF);
	},
	
	NOT32: function(Value)
	{
		return ~Value;
	},
	
	NOT16: function(Value)
	{
		return ~Value & 0xFFFF;
	},
	
	NOT8: function(Value)
	{
		return ~Value & 0xFF;
	},
	
	ROL32: function(Value, Amount)
	{
		return Value << (Amount % 32) | Value >>> (32-(Amount % 32));
	},
	
	ROL16: function(Value, Amount)
	{
		return (((Value & 0xFFFF) << (Amount % 16)) | ((Value & 0xFFFF) >>> (16-(Amount % 16)))) & 0xFFFF;
	},
	
	ROL8: function(Value, Amount)
	{
		return (((Value & 0xFF) << (Amount % 8)) | ((Value & 0xFF) >>> (8-(Amount % 8)))) & 0xFF;
	},
	
	ROR32: function(Value, Amount)
	{
		return Value >>> (Amount % 32) | Value << (32-(Amount % 32));
	},
	
	ROR16: function(Value, Amount)
	{
		return (((Value & 0xFFFF) >>> (Amount % 16)) | ((Value & 0xFFFF) << (16-(Amount % 16)))) & 0xFFFF;
	},
	
	ROR8: function(Value, Amount)
	{
		return (((Value & 0xFF) >>> (Amount % 8)) | ((Value & 0xFF) << (8-(Amount % 8)))) & 0xFF;
	},
	
	LSH32: function(Value, Amount)
	{
		return Value << Amount;
	},
	
	LSH16: function(Value, Amount)
	{
		return (Value << Amount) & 0xFFFF;
	},
	
	LSH8: function(Value, Amount)
	{
		return (Value << Amount) & 0xFF;
	},
	
	RSH32: function(Value, Amount)
	{
		return Value >>> Amount;
	},
	
	RSH16: function(Value, Amount)
	{
		return (Value >>> Amount) & 0xFFFF;
	},
	
	RSH8: function(Value, Amount)
	{
		return (Value >>> Amount) & 0xFF;
	},
	
	SetBitFlag: function(Value, Bit)
	{
		workingBit = 1 << (Bit % 32);
		return Value | workingBit;
	},
	
	ClearBitFlag: function(Value, Bit)
	{
		workingBit = 1 << (Bit % 32);
		return Value & (~workingBit);
	},

	ToggleBitFlag: function(Value, Bit)
	{
		workingBit = 1 << (Bit % 32);
		return Value ^ workingBit;
	},
	
	EmbedValue: function(Value, EmbedValue, BitOffset, BitLength)
	{
		BitMask = this.GetBitMask(BitLength);
		EmbedValue = (EmbedValue & BitMask) << BitOffset;
		BitMask <<= BitOffset;
		Value &= ~BitMask;
		Value |= EmbedValue;
		return Value;
	},

	RetrieveEmbeddedValue: function(Value, BitOffset, BitLength)
	{
		BitMask = this.GetBitMask(BitLength);
		Value >>= BitOffset;
		Value &= BitMask;
		return Value;
	},

	Signed8: function(Value)
	{
		Value &= 0xFF;
		if (Value > 127) {Value = Value - 256;}
		return Value;
	},

	Signed16: function(Value)
	{
		Value &= 0xFFFF;
		if (Value > 32767) {Value = Value - 65536;}
		return Value;
	}
};

CServices.extend(CRunExtension, CRunBitwiser);