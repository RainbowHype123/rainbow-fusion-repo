//----------------------------------------------------------------------------------
//
// CRUNWIZARDTIMON: Port of Wizard Timon by AA2953B4
// (MonoFusion port reused for original XNA runtime)
//
//----------------------------------------------------------------------------------

using RuntimeXNA.Expressions;
using System;
using System.Collections.Generic;

namespace RuntimeXNA.Extensions
{
    class CRunWizardTimon : CRunExtension
    {
        private const int EXP_NUMTOBINSTR = 0;
        private const int EXP_BINSTRTONUM = 1;
        private const int EXP_NUMTOOCTSTR = 2;
        private const int EXP_OCTSTRTONUM = 3;
        private const int EXP_NUMTOHEXSTR = 4;
        private const int EXP_HEXSTRTONUM = 5;

        public override CValue expression(int num)
        {
            switch (num)
            {
                case EXP_NUMTOBINSTR:
				{
					int num = ho.getExpParam().GetInt();
                    string convertedStr = Convert.ToString(num, 2);
                    return new CValue(convertedStr);
                }
                case EXP_BINSTRTONUM:
				{
					string text = ho.getExpParam().GetString();
                    int convertedInt = Convert.ToInt32(text, 2);
                    return new CValue(convertedInt);
                }
                case EXP_NUMTOOCTSTR:
				{
					int num = ho.getExpParam().GetInt();
                    string convertedStr = Convert.ToString(num, 8);
                    return new CValue(convertedStr);
                }
                case EXP_OCTSTRTONUM:
				{
					string text = ho.getExpParam().GetString();
                    int convertedInt = Convert.ToInt32(text, 8);
                    return new CValue(convertedInt);
                }
                case EXP_NUMTOHEXSTR:
				{
					int num = ho.getExpParam().GetInt();
                    string convertedStr = Convert.ToString(num, 16);
                    return new CValue(convertedStr);
                }
                case EXP_HEXSTRTONUM:
				{
					string text = ho.getExpParam().GetString();
                    int convertedInt = Convert.ToInt32(text, 16);
                    return new CValue(convertedInt);
                }
            }
            return null;
        }
    }
}