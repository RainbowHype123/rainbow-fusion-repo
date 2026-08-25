// Bitwiser Object - XNA port (All Platforms)
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RuntimeXNA.Extensions;
using RuntimeXNA.Services;
using RuntimeXNA.RunLoop;
using RuntimeXNA.Sprites;
using RuntimeXNA.Conditions;
using RuntimeXNA.Actions;
using RuntimeXNA.Expressions;
using RuntimeXNA.Objects;
using RuntimeXNA.Params;
using RuntimeXNA.Frame;
using RuntimeXNA.OI;
using RuntimeXNA.Movements;

namespace RuntimeXNA.Extensions
{
    class CRunBitwiser : CRunExtension
    {
        const int CND_ISFLAGSET = 0;

        const int EXP_OR32 = 0;
        const int EXP_XOR32 = 1;
        const int EXP_AND32 = 2;
        const int EXP_NOT32 = 3;
        const int EXP_ROL32 = 4;
        const int EXP_ROR32 = 5;
        const int EXP_LSH32 = 6;
        const int EXP_RSH32 = 7;

        const int EXP_OR16 = 8;
        const int EXP_XOR16 = 9;
        const int EXP_AND16 = 10;
        const int EXP_NOT16 = 11;
        const int EXP_ROL16 = 12;
        const int EXP_ROR16 = 13;
        const int EXP_LSH16 = 14;
        const int EXP_RSH16 = 15;

        const int EXP_OR8 = 16;
        const int EXP_XOR8 = 17;
        const int EXP_AND8 = 18;
        const int EXP_NOT8 = 19;
        const int EXP_ROL8 = 20;
        const int EXP_ROR8 = 21;
        const int EXP_LSH8 = 22;
        const int EXP_RSH8 = 23;

        const int EXP_SETBITFLAG = 24;
        const int EXP_CLEARBITFLAG = 25;
        const int EXP_TOGGLEBITFLAG = 26;
        const int EXP_EMBEDVALUE = 27;
        const int EXP_RETRIEVEEMBEDDEDVALUE = 28;
        const int EXP_SIGNED8 = 29;
        const int EXP_SIGNED16 = 30;

        public override int getNumberOfConditions()
        {
            return 1;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool IsFlagSet(int Flag, int Value)
        {
            workingFlag = 1 << (Flag % 32);	
            return (Value & workingFlag) != 0;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_ISFLAGSET:
                    return IsFlagSet(cnd.getParamExpression(rh, 0), cnd.getParamExpression(rh, 1));
            }
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            // Return nothing.
        }

        public override CValue GetBitMask(int bits)
        {
            int mask = 0;
            for (int i = 0; i < bits; i++)
            {
                mask <<= 1;
                mask |= 1;
            }
            return mask;
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                /*
                    THESE ALL NEED TO BE ADJUSTED BEFORE THE PORT CAN BE LABELED AS FINALIZED
                     8-bit = "& 0xFF"
                    16-bit = "& 0xFFFF"
                    32-bit = No extra bit offsetting, just write as normal evaluations
                    
                    ho.getExpParam().getInt()
                    
                      & = AND
                      | = OR
                      ^ = XOR
                      ~ = NOT (Compliment)
                     << = Left Shift
                     >> = Right Shift
                    >>> = Unsigned Right Shift
                */
                case EXP_OR32:
                {
                    return new CValue(ho.getExpParam().getInt() | ho.getExpParam().getInt()); // A | B
                }
                case EXP_XOR32:
                {
                    return new CValue(ho.getExpParam().getInt() ^ ho.getExpParam().getInt());
                }
                case EXP_AND32:
                {
                    return new CValue(ho.getExpParam().getInt() & ho.getExpParam().getInt());
                }
                case EXP_NOT32:
                {
                    return new CValue(~ho.getExpParam().getInt());
                }
                case EXP_ROL32:
                {
                    int Value = ho.getExpParam().getInt();
                    int Amount = ho.getExpParam().getInt();
                    
                    return new CValue((Value << (Amount % 32)) | (Value >>> (32-(Amount % 32))));
                }
                case EXP_ROR32:
                {
                    int Value = ho.getExpParam().getInt();
                    int Amount = ho.getExpParam().getInt();
                    
                    return new CValue((Value >>> (Amount % 32)) | (Value << (32-(Amount % 32))));
                }
                case EXP_LSH32:
                {
                    return new CValue(ho.getExpParam().getInt() << ho.getExpParam().getInt());
                }
                case EXP_RSH32:
                {
                    return new CValue(ho.getExpParam().getInt() >>> ho.getExpParam().getInt());
                }
                case EXP_OR16:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFFFF) | (ho.getExpParam().getInt() & 0xFFFF));
                }
                case EXP_XOR16:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFFFF) ^ (ho.getExpParam().getInt() & 0xFFFF));
                }
                case EXP_AND16:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFFFF) & (ho.getExpParam().getInt() & 0xFFFF));
                }
                case EXP_NOT16:
                {
                    return new CValue(~ho.getExpParam().getInt() & 0xFFFF);
                }
                case EXP_ROL16:
                {
                    int Value = (ho.getExpParam().getInt() & 0xFFFF);
                    int Amount = (ho.getExpParam().getInt() & 0xFFFF);
                    
                    return new CValue(((Value << (Amount % 16)) | (Value >>> (16-(Amount % 16)))) & 0xFFFF);
                }
                case EXP_ROR16:
                {
                    int Value = (ho.getExpParam().getInt() & 0xFFFF);
                    int Amount = (ho.getExpParam().getInt() & 0xFFFF);
                    
                    return new CValue(((Value >>> (Amount % 16)) | (Value << (16-(Amount % 16)))) & 0xFFFF);
                }
                case EXP_LSH16:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFFFF) << (ho.getExpParam().getInt() & 0xFFFF));
                }
                case EXP_RSH16:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFFFF) >>> (ho.getExpParam().getInt() & 0xFFFF));
                }
                case EXP_OR8:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFF) | (ho.getExpParam().getInt() & 0xFF));
                }
                case EXP_XOR8:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFF) ^ (ho.getExpParam().getInt() & 0xFF));
                }
                case EXP_AND8:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFF) & (ho.getExpParam().getInt() & 0xFF));
                }
                case EXP_NOT8:
                {
                    return new CValue(~ho.getExpParam().getInt() & 0xFF);
                }
                case EXP_ROL8:
                {
                    int Value = (ho.getExpParam().getInt() & 0xFF);
                    int Amount = (ho.getExpParam().getInt() & 0xFF);
                    
                    return new CValue(((Value << (Amount % 8)) | (Value >>> (8-(Amount % 8)))) & 0xFF);
                }
                case EXP_ROR8:
                {
                    int Value = (ho.getExpParam().getInt() & 0xFF);
                    int Amount = (ho.getExpParam().getInt() & 0xFF);
                    
                    return new CValue(((Value >>> (Amount % 8)) | (Value << (8-(Amount % 8)))) & 0xFF);
                }
                case EXP_LSH8:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFF) << (ho.getExpParam().getInt() & 0xFF));
                }
                case EXP_RSH8:
                {
                    return new CValue((ho.getExpParam().getInt() & 0xFF) >>> (ho.getExpParam().getInt() & 0xFF));
                }
                case EXP_SETBITFLAG:
                {
                    int Value = ho.getExpParam().getInt();
                    int Bit = ho.getExpParam().getInt();

                    int workingBit = 1 << (Bit % 32);
                    
                    return new CValue(Value | workingBit);
                }
                case EXP_CLEARBITFLAG:
                {
                    int Value = ho.getExpParam().getInt();
                    int Bit = ho.getExpParam().getInt();

                    int workingBit = 1 << (Bit % 32);

                    return new CValue(Value & (~workingBit));
                }
                case EXP_TOGGLEBITFLAG:
                {
                    int Value = ho.getExpParam().getInt();
                    int Bit = ho.getExpParam().getInt();

                    int workingBit = 1 << (Bit % 32);

                    return new CValue(Value ^ workingBit);
                }
                case EXP_EMBEDVALUE:
                {
                    int Value = ho.getExpParam().getInt();
                    int EmbedValue = ho.getExpParam().getInt();
                    int BitOffset = ho.getExpParam().getInt();
                    int BitLength = ho.getExpParam().getInt();
                    
                    BitMask = GetBitMask(BitLength);
                    EmbedValue = (EmbedValue & BitMask) << BitOffset;
                    BitMask <<= BitOffset;
                    Value &= ~BitMask;
                    Value |= EmbedValue;

                    return new CValue(Value);
                }
                case EXP_RETRIEVEEMBEDDEDVALUE:
                {
                    int Value = ho.getExpParam().getInt();
                    int BitOffset = ho.getExpParam().getInt();
                    int BitLength = ho.getExpParam().getInt();
                    
                    BitMask = GetBitMask(BitLength);
                    Value >>= BitOffset;
                    Value &= BitMask;

                    return new CValue(Value);
                }
                case EXP_SIGNED8:
                {
                    int Value = ho.getExpParam().getInt();

                    Value &= 0xFF;
                    
                    if (Value > 127)
                    {
                        Value = Value - 256;
                    }
                    
                    return new CValue(Value);
                }
                case EXP_SIGNED16:
                {
                    int Value = ho.getExpParam().getInt();

                    Value &= 0xFFFF;

                    if (Value > 32767)
                    {
                        Value = Value - 65536;
                    }
                    
                    return new CValue(Value);
                }
            }
            return new CValue(0);
        }
    }
}