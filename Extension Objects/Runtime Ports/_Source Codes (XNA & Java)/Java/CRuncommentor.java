import java.awt.*;
import java.io.*;
import Extensions.*;
import Services.*;
import RunLoop.*;
import Conditions.*;
import Actions.*;
import Expressions.*;
import java.util.ArrayList;

public class CRuncommentor extends CRunExtension
{
    // <editor-fold defaultstate="collapsed" desc=" A/C/E Constants ">
    public static final int CNDCOMMENT = 0;
    public static final int CNDLAST = 1;

    public static final int ACTCOMMENT = 0;

    // </editor-fold>

    public CRuncommentor()
    {

    }
    public @Override int getNumberOfConditions()
    {
	    return CNDLAST;
    }
    public @Override boolean createRunObject(CBinaryFile file, CCreateObjectInfo cob, int version)
    {
        return false;
    }
    public @Override void destroyRunObject(boolean bFast)
    {

    }


    public @Override int handleRunObject()
    {
        return 0;
    }


    public @Override void displayRunObject(Graphics2D g2)
    {
    }
    public @Override boolean saveRunObject(DataOutputStream stream)
    {
        return true;
    }
    public @Override boolean loadRunObject(DataInputStream stream)
    {
        return true;
    }

    // Conditions
    // -------------------------------------------------
    public @Override boolean condition(int num, CCndExtension cnd)
    {
        switch (num)
        {
            case CNDCOMMENT:
                return true;
        }
        return false;
    }

    // Actions
    // -------------------------------------------------
    public @Override void action(int num, CActExtension act)
    {
        switch (num)
        {
            case ACTCOMMENT:
                break;
        }
    }

    // Expressions
    // -------------------------------------------------
    public @Override CValue expression(int num)
    {
        switch (num)
        {

        }
        return null;
    }
}