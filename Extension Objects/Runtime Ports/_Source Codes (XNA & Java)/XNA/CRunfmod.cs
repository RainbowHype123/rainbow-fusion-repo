// FMod Object - XNA port (All Platforms)
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
    class CRunfmod : CRunExtension
    {
        //const int CND_LAST = 0;

        const int EXP_FLOATMODULUS = 0;

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
                case EXP_FLOATMODULUS:
				{
                    double value1 = ho.getExpParam().GetDouble();
                    double value2 = ho.getExpParam().GetDouble();
                    //float value1 = ho.getExpParam().GetFloat();
                    //float value2 = ho.getExpParam().GetFloat();

                    return new CValue(value1 % value2);
                }
            }
            return new CValue(0);
        }
    }
}