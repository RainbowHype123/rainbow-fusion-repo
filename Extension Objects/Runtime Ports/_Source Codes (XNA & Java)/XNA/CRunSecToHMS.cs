// Seconds to HMS Object - XNA port (All Platforms)

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
    class CRunSecToHMS : CRunExtension
    {
        const int ACT_CONVERTSECONDS = 0;

        const int EXP_GETSECONDS = 0;
        const int EXP_GETMINUTES = 1;
        const int EXP_GETHOURS = 2;

        int SecondsToConvert = 0;

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
            switch (num)
            {
                case ACT_CONVERTSECONDS:
                {
                    int inputInt = act.getParamExpression(rh, 0);

                    if (SecondsToConvert > 0.0)
                    {
                        SecondsToConvert = inputInt;
                        break;
                    }

                    SecondsToConvert = 0; // Else
                }
            }
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_GETSECONDS:
                {
					return new CValue(SecondsToConvert);
                }
                case EXP_GETMINUTES:
                {
					return new CValue(SecondsToConvert / 60);
                }
                case EXP_GETHOURS:
                {
					return new CValue((SecondsToConvert / 60) / 60);
                }
            }
            return new CValue(0);
        }
    }
}