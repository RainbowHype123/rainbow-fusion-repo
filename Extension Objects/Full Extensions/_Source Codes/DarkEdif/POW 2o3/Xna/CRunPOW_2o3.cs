// Behind The Runtime - XNA port (All Platforms)
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
    class CRunPOW_2o3 : CRunExtension
    {
        const int EXP_SQUAREPARAM = 0;
        const int EXP_CUBEPARAM = 1;
        const int EXP_POWFUNC = 2;

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
            // Nothing.
        }

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_SQUAREPARAM:
                {
                    int inputParam = ho.getExpParam().GetInteger();
                    
                    return (inputParam * inputParam);
                }
                case EXP_CUBEPARAM:
                {
                    int inputParam = ho.getExpParam().GetInteger();
                    
                    return (inputParam * inputParam * inputParam);
                }
                case EXP_POWFUNC:
                {
                    int BaseInput = ho.getExpParam().GetInteger();
                    int ExponentInput = ho.getExpParam().GetInteger();
                    
                    return Math.Pow(BaseInput, ExponentInput);
                }
            }
            return new CValue(0);
        }
    }
}
