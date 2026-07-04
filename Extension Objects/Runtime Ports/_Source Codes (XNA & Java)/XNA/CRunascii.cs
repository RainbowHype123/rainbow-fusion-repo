// ASCII Object - XNA port (All Platforms)
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
    class CRunascii : CRunExtension
    {
        //const int CND_LAST = 0;

        const int EXP_CHAR2INT = 0;
        const int EXP_INT2CHAR = 1;

        public override int getNumberOfConditions()
        {
            return 0;
        }

        public override bool createRunObject(CFile file, CCreateObjectInfo cob, int version)
        {
            return true;
        }

        public override bool condition(int num, CCndExtension cnd)
        {
            return false;
        }

        public override void action(int num, CActExtension act)
        {
            // No actions
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_CHAR2INT:
				{
					string text = ho.getExpParam().GetString();

                    if (string.IsNullOrEmpty(text))
                        return new CValue(0);

                    return new CValue((int)(text[0] & (char)0xFF));
                }
                case EXP_INT2CHAR:
				{
					int value = ho.getExpParam().GetInt();

                    return new CValue(((char)(value & 0xFF)).ToString());
                }
            }
            return new CValue(0);
        }
    }
}