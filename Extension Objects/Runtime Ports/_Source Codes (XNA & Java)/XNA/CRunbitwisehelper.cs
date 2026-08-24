// bitwisehelper Object - XNA port (All Platforms)
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
    class CRunbitwisehelper : CRunExtension
    {
        const int CND_ISTRUE = 0;
        const int CND_ISFALSE = 1;

        const int EXP_EQUAL = 0;
        const int EXP_DIFFERENT = 1;
        const int EXP_LOWER = 2;
        const int EXP_LOWEREQUAL = 3;
        const int EXP_GREATER = 4;
        const int EXP_GREATEREQUAL = 5;
        const int EXP_CONDITIONAL = 6;
        const int EXP_STREQUAL = 7;
        const int EXP_STRDIFFERENT = 8;
        const int EXP_STRCONDITIONAL = 9;

        public override int getNumberOfConditions()
        {
            return 2;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            switch (num)
            {
                case CND_ISTRUE:
                {
					int value = cnd.getParamExpression(rh, 0);

                    return value == 1;
                }
                case CND_ISFALSE:
                {
					int value = cnd.getParamExpression(rh, 0);

                    return value == 0;
                }
            }
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            // Return nothing.
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_EQUAL:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 == value2) ? 1 : 0);
                }
                case EXP_DIFFERENT:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 != value2) ? 1 : 0);
                }
                case EXP_LOWER:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 < value2) ? 1 : 0);
                }
                case EXP_LOWEREQUAL:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 <= value2) ? 1 : 0);
                }
                case EXP_GREATER:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 > value2) ? 1 : 0);
                }
                case EXP_GREATEREQUAL:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 >= value2) ? 1 : 0);
                }
                case EXP_CONDITIONAL:
                {
                    int value1 = ho.getExpParam().getInt();
                    int value2 = ho.getExpParam().getInt();
                    int value3 = ho.getExpParam().getInt();
                    
                    return new CValue((value1 == 1) ? value2 : value3);
                }
                case EXP_STREQUAL:
                {
                    String str1 = ho.getExpParam().getString();
                    String str2 = ho.getExpParam().getString();
                    
                    return new CValue((str1 == str2) ? 1 : 0);
                }
                case EXP_STRDIFFERENT:
                {
                    String str1 = ho.getExpParam().getString();
                    String str2 = ho.getExpParam().getString();
                    
                    return new CValue((str1 != str2) ? 1 : 0);
                }
                case EXP_STRCONDITIONAL:
                {
                    int value1 = ho.getExpParam().getInt();
                    String str2 = ho.getExpParam().getString();
                    String str3 = ho.getExpParam().getString();
                    
                    return new CValue((value1 == 1) ? str2 : str3);
                }
            }
            return new CValue(0);
        }
    }
}