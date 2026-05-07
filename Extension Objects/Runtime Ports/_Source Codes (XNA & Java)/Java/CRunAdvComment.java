import java.awt.*;
import java.io.*;
import Extensions.*;
import Services.*;
import RunLoop.*;
import Conditions.*;
import Actions.*;
import Expressions.*;
import java.util.ArrayList;

public class CRunAdvComment extends CRunExtension
{
    // <editor-fold defaultstate="collapsed" desc=" A/C/E Constants ">
    public static final int CNDCOMMENT = 0;
    public static final int CNDOBJCOMMENT = 1;
    public static final int CNDTXTREGCOMMENT = 2;
    public static final int CNDTXTREGNOTE = 3;
    public static final int CNDTXTREGREMINDER = 4;
    public static final int CNDTXTREGIMPORTANT = 5;
    public static final int CNDTXTREGAAE = 6;
    public static final int CNDTXTCAPCOMMENT = 7;
    public static final int CNDTXTCAPNOTE = 8;
    public static final int CNDTXTCAPREMINDER = 9;
    public static final int CNDTXTCAPIMPORTANT = 10;
    public static final int CNDLAST = 11;

    public static final int ACTCOMMENT = 0;
    public static final int ACTTXTREGCOMMENT = 1;
    public static final int ACTTXTREGNOTE = 2;
    public static final int ACTTXTREGREMINDER = 3;
    public static final int ACTTXTREGIMPORTANT = 4;
    public static final int ACTTXTREGAAA = 5;
    public static final int ACTTXTREGAAB = 6;
    public static final int ACTTXTCAPCOMMENT = 7;
    public static final int ACTTXTCAPNOTE = 8;
    public static final int ACTTXTCAPREMINDER = 9;
    public static final int ACTTXTCAPIMPORTANT = 10;

    // </editor-fold>

    public CRunAdvComment()
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
            case CNDOBJCOMMENT:
                return true;
            case CNDTXTREGCOMMENT:
                return true;
            case CNDTXTREGNOTE:
                return true;
            case CNDTXTREGREMINDER:
                return true;
            case CNDTXTREGIMPORTANT:
                return true;
            case CNDTXTREGAAE:
                return true;
            case CNDTXTCAPCOMMENT:
                return true;
            case CNDTXTCAPNOTE:
                return true;
            case CNDTXTCAPREMINDER:
                return true;
            case CNDTXTCAPIMPORTANT:
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
            case ACTTXTREGCOMMENT:
                break;
            case ACTTXTREGNOTE:
                break;
            case ACTTXTREGREMINDER:
                break;
            case ACTTXTREGIMPORTANT:
                break;
            case ACTTXTREGAAA:
                break;
            case ACTTXTREGAAB:
                break;
            case ACTTXTCAPCOMMENT:
                break;
            case ACTTXTCAPNOTE:
                break;
            case ACTTXTCAPREMINDER:
                break;
            case ACTTXTCAPIMPORTANT:
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