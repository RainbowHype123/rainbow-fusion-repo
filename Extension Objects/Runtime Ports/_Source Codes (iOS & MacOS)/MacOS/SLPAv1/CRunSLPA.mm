//
//  CRunSLPA.m
//
//  Created by azarl on 2019/11/11.
//  Copyright © 2019年 Clickteam. All rights reserved.
//

#import <AppKit/AppKit.h>

#import "CRunExtension.h"
#import "CExtension.h"
#import "CRun.h"
#import "CCreateObjectInfo.h"
#import "CActExtension.h"
#import "CCndExtension.h"
#import "CRect.h"
#import "CValue.h"

#import "CFile.h"
#import "CRunFrame.h"
#import "CSprite.h"
#import "CSpriteGen.h"
#import "CRCom.h"
#import "CRenderer.h"
#import "CObject.h"
#import "CImage.h"
#import "CImageBank.h"
#import "CRunApp.h"
#import "CLayer.h"
#import "CFontInfo.h"
#import "NSExtensions.h"
#import "CServices.h"

#import "CRunSLPA.h"

@implementation CRunSLPA
// -----------------------------------------
-(int)getNumberOfConditions {
    return 0;
}
-(BOOL)createRunObject:(CFile*)file withCOB:(CCreateObjectInfo*)cob andVersion:(int)version{
    Active_Check = [file readAInt];
    block_size = DEF_BLOCK_SIZE;
    area_w = ho->hoAdRunHeader->rhApp->gaCxWin / block_size;
    area_h = ho->hoAdRunHeader->rhApp->gaCyWin / block_size;
    max_x = (ho->hoAdRunHeader->rhFrame->leVirtualRect.right / area_w) + 1;
    max_y = (ho->hoAdRunHeader->rhFrame->leVirtualRect.bottom / area_h) + 1;
    max_z = ho->hoAdRunHeader->rhFrame->nLayers;
    fade_size = 0;
    old_block_x = -1 ; old_block_y = -1;
    int sx = max_x * max_y * max_z;
    a_map = new FadeAreaList[sx];
    int y, x , z;
    FadeAreaList *tp;
    for (z = 0; z < max_z; z++) {
        for (y = 0; y < max_y; y++) {
            for (x = 0; x < max_x; x++) {
                tp = new FadeAreaList();
                tp->lq = [[NSMutableArray alloc] init];
                a_map[ (z*(max_y*max_x))+(y * max_x) + x] = *tp;
            }
        }
    }
    fixed_map = [[NSMutableDictionary alloc] init];
    phin_fixed_list = [[NSMutableArray alloc] init];
    phchange_fixed_list = [[NSMutableArray alloc] init];
    short nmax = 0;
    CRun* rhPtr = ho->hoAdRunHeader;
    for( z = 0 ; z < rhPtr->rhMaxOI ; z++ ){
        if( nmax < rhPtr->rhOiList[z]->oilOi )
            nmax = rhPtr->rhOiList[z]->oilOi;
    }
    oinum_tbl = new short[ nmax + 1 ];
    for( z = 0 ; z < rhPtr->rhMaxOI ; z++ ){
        oinum_tbl[ rhPtr->rhOiList[z]->oilOi ] = (short)z;
    }
    //cash_spr_lay = new CSprite[ rhPtr->rhFrame->nLayers ];
    cash_spr_lay = (CSprite**) malloc( rhPtr->rhFrame->nLayers * sizeof(CSprite*) );
    for( x = 0 ; x < rhPtr->rhFrame->nLayers ; x++ ){
        cash_spr_lay[x] = NULL;
    }
    return true;
}
-(void)destroyRunObject:(BOOL)bFast {
    int y, x ,z;
    FadeAreaList *tp;
    for (z = 0; z < max_z; z++) {
        for (y = 0; y < max_y; y++) {
            for (x = 0; x < max_x; x++) {
                [self PhaseIn_map:x y:y z:z destroy:bFast];
                tp = &a_map[(z*(max_y*max_x))+(y * max_x) + x];
                delete tp;
                [tp->lq release];
                tp->lq = NULL;
                delete &a_map[(z*(max_y*max_x))+(y * max_x) + x] ;
            }
        }
    }
    if (a_map != NULL) {
        delete a_map;
        a_map = NULL;
    }
    [fixed_map removeAllObjects];
    [fixed_map release];
    fixed_map = NULL;
    
    [phin_fixed_list removeAllObjects];
    [phin_fixed_list release];
    phin_fixed_list = NULL;
    
    [phchange_fixed_list removeAllObjects];
    [phchange_fixed_list release];
    phchange_fixed_list = NULL;
    
    delete oinum_tbl;
    oinum_tbl = NULL;
    
    for( x = 0 ; x < ho->hoAdRunHeader->rhFrame->nLayers ; x++ ){
        cash_spr_lay[x] = NULL;
    }
    free( cash_spr_lay );
    cash_spr_lay = NULL;
}
-(int)handleRunObject {
    

    return 0;
}
-(void)displayRunObject:(CRenderer *)renderer{
}
-(BOOL)condition:(int)num withCndExtension:(CCndExtension*)cnd {
    return NO;
}
-(void)action:(int)num withActExtension:(CActExtension*)act {
    switch (num){
        case 0: // PhaseOut - Rect
            break;
        case 1: // PhaseIn  - Map
            break;
        case 2: // PhaseIn  - ALL
            [self PhaseIN_ALL];
            break;
        case 3: // autoPhaseExecute
            [self autoPhaseExecute];
            break;
        case 4: // addFixedValueMap
            short val = [act getParamAltValue:ho->hoAdRunHeader withNum:1];
            [self addFixedValueMap:[act getParamObject:ho->hoAdRunHeader withNum:0] val:val];
            break;
    }
}
-(CValue*)expression:(int)num {
    CValue* expRet = [rh getTempString:@""];
    switch (num){
        case 0: // getPhaseOutCount
            [expRet forceInt:fade_size];
            break;
        case 1: // getPhaseMap_maxX
            [expRet forceInt:max_x];
            break;
        case 2: // getPhaseMap_maxY
            [expRet forceInt:max_y];
            break;
        case 3: // getPhaseMap_AreaW
            [expRet forceInt:area_w];
            break;
        case 4: // getPhaseMap_AreaH
            [expRet forceInt:area_h];
            break;
    }
    return expRet;
}
// -----------------------------------------
-(void)PhaseOut_RECT:(int)left top:(int)top right:(int)right bottom:(int)bottom {
}
-(void)PhaseIN_map:(int)map_x map_y:(int)map_y{
}
-(void)PhaseIN_ALL {
   [self PhaseIn_ALL];
   [self ChangePixedValue];
}
-(void)PhaseIn_ALL{
    int z , y, x;
    for( x = 0 ; x < ho->hoAdRunHeader->rhFrame->nLayers ; x++ ){
        cash_spr_lay[x] = NULL;
    }
    for (z = 0; z < max_z; z++) {
        for (y = 0; y < max_y; y++) {
            for (x = 0; x < max_x; x++) {
                [self PhaseIn_map:x y:y z:z destroy:false];
            }
        }
    }
}
-(void)autoPhaseExecute{
    if ( Active_Check > 0 ) {
        [self phaseOutAct];
        [self phaseInAct];
        [self ChangePixedValue];
    }
}
-(void)addFixedValueMap:(CObject*)obj val:(short)val{
    NSMutableArray *itr = [fixed_map objectForKey:[NSNumber numberWithInteger:obj->hoOi]];
    if (itr != NULL) {// oi
    }else {// oilist none
        itr = [[NSMutableArray alloc] init];
        [fixed_map setObject:itr forKey:[NSNumber numberWithInteger:obj->hoOi]];
    }
    if (itr != NULL) {
        if ( [itr isEqual:[NSNumber numberWithShort:val]] ) {
        }else {
            [itr addObject:[NSNumber numberWithShort:val]];
        }
    }
}
-(void)phaseOutAct{
    int l, t, r, b;
    CRun *rhPtr = ho->hoAdRunHeader;
    l = (rhPtr->rh3DisplayX - area_w) ;
    t = (rhPtr->rh3DisplayY - area_h) ;
    r = (rhPtr->rh3DisplayX + ho->hoAdRunHeader->rhApp->gaCxWin + area_w);
    b = (rhPtr->rh3DisplayY + ho->hoAdRunHeader->rhApp->gaCyWin + area_h);
    [self PhaseOutRect:l top:t right:r bottom:b];
}
-(void) phaseInAct {
    CRun    *rhPtr = ho->hoAdRunHeader;
    if (old_block_x < 0) {
        old_block_x = rhPtr->rh3DisplayX / area_w;
        old_block_y = rhPtr->rh3DisplayY / area_h;
    }
    int block_x = rhPtr->rh3DisplayX / area_w;
    int block_y = rhPtr->rh3DisplayY / area_h;
    if (block_x != old_block_x || block_y != old_block_y) {
        int l, t, r, b;
        int z, y, x;
        if (fade_size > 0) {
            for( x = 0 ; x < rhPtr->rhFrame->nLayers ; x++ ){
                cash_spr_lay[x] = NULL;
            }
            for (z = 0; z < max_z; z++) {
                CLayer *ml_;
                ml_ = ho->hoAdRunHeader->rhFrame->layers[z];
                l = (int)( (rhPtr->rh3DisplayX - area_w) * ml_->xCoef );
                t = (int)( (rhPtr->rh3DisplayY - area_h) * ml_->yCoef );
                r = (int)( (rhPtr->rh3DisplayX * ml_->xCoef ) + (ho->hoAdRunHeader->rhApp->gaCxWin + area_w) );
                b = (int)( (rhPtr->rh3DisplayY * ml_->yCoef ) + (ho->hoAdRunHeader->rhApp->gaCyWin + area_h) );
                l /= area_w;
                t /= area_h;
                r /= area_w;
                b /= area_h;
                for (y = t; y <= b; y++) {
                    for (x = l; x <= r; x++) {
                        [self PhaseIn_map:x y:y z:z destroy:false];
                    }
                }
            }
        }
        old_block_x = block_x;
        old_block_y = block_y;
    }
}
-(void)PhaseIn_map:(int)x y:(int)y z:(int)z destroy:(BOOL)destroy{
    if (x < 0 || y < 0 || x >= max_x || y >= max_y)
        return;
    FadeAreaList *tp;
    tp = &a_map[(z*(max_y*max_x)) + (y * max_x) + x];
    if ( [tp->lq count] > 0) {
        int i , lp;
        CRun    *rhPtr = ho->hoAdRunHeader;
        CObject *obj;
        short ho_num = 0;
        CLayer *ml_;
        lp = (int)[tp->lq count];
        for ( i = 0; i < lp; i++) {
            obj = (CObject*)[tp->lq lastObject];
            [tp->lq removeLastObject];
            ho_num = [self getNullPos:ho_num];
            rhPtr->rhObjectList[ho_num] = obj;
            [phin_fixed_list addObject:[NSNumber numberWithInteger:((obj->hoCreationId << 16) | (obj->hoNumber & 0xFFFF))]];
            [phchange_fixed_list addObject:[NSNumber numberWithInteger:((obj->hoCreationId << 16) | (ho_num & 0xFFFF))]];
            obj->hoNumber = ho_num;
            [self oi_Insert:obj];
            if (obj != NULL) {
                fade_size--;
                rhPtr->rhNObjects++;
                obj->hoOiList->oilNObjects++;
                ml_ = rhPtr->rhFrame->layers[obj->hoLayer];
                if (ml_->xCoef != 1.0f)
                    obj->hoX += (rhPtr->rh3DisplayX - (rhPtr->rh3DisplayX * ml_->xCoef) + ml_->xCoef);
                if (ml_->yCoef != 1.0f)
                    obj->hoY += (rhPtr->rh3DisplayY - (rhPtr->rh3DisplayY * ml_->yCoef) + ml_->yCoef);
                if (obj->roc->rcSprite != NULL) {
                    [self linkLastSprite:obj->roc->rcSprite layer:obj->hoLayer];
                }
                if (destroy) {
                    [obj kill:true];
                }
            }
        }
    }
}
-(short)getNullPos:(short)offset {
    short i ;
    CRun    *rhPtr = ho->hoAdRunHeader;
    for (i = offset; i < rhPtr->rhMaxObjects; i++) {
        if (rhPtr->rhObjectList[i] == NULL ) {
            return i;
        }
    }
    return -1;
}
-(void)PhaseOutRect:(int)left top:(int)top right:(int)right bottom:(int)bottom{
    CObject *obj , *rdObj;
    CRun    *rhPtr = ho->hoAdRunHeader;
    FadeAreaList *tp;
    int x, y,z;
    int obj_x, obj_y;
    CLayer *ml_;
    int l, t, r, b;
    int end_obj = rhPtr->rhNObjects;
    int i = 0, next = 0;
    do {
        obj = rhPtr->rhObjectList[next];
        if (obj != NULL) {
            i++;
            rdObj = obj;
            if ( obj->hoType == 0x0002 && (obj->hoOEFlags & 0x0800) == 0
                && !((rhPtr->rhDestroyList[obj->hoNumber / 32] & (1 << (obj->hoNumber & 31))) == 1)
                && rdObj->roc->rcMovementType < 14
                ) {
                z = obj->hoLayer;
                ml_ = ho->hoAdRunHeader->rhFrame->layers[z];
                l = left;
                t = top;
                r = right;
                b = bottom ;
                obj_x = obj->hoX ;
                obj_y = obj->hoY ;
                if (ml_->xCoef != 1.0f)
                    obj_x -= (rhPtr->rh3DisplayX - (rhPtr->rh3DisplayX * ml_->xCoef));
                if (ml_->yCoef != 1.0f)
                    obj_y -= (rhPtr->rh3DisplayY - (rhPtr->rh3DisplayY * ml_->yCoef));
                if (obj_x >= rhPtr->rhFrame->leVirtualRect.left
                    && obj_y >= rhPtr->rhFrame->leVirtualRect.top
                    && obj_x < rhPtr->rhFrame->leVirtualRect.right
                    && obj_y < rhPtr->rhFrame->leVirtualRect.bottom
                    ) {
                    x = obj_x / area_w ;
                    y = obj_y / area_h ;
                    if ( (obj->hoX < l || obj->hoX > r || obj->hoY < t || obj->hoY > b ) &&
                        (x >= 0 && y >= 0 && x < max_x && y < max_y)
                        ) {
                        if ( (rdObj->hoOEFlags & 0x4000) == 0 || (rdObj->hoOEFlags & 0x8000)==0 ){
                            obj->hoX = obj_x;
                            obj->hoY = obj_y;
                            tp = &a_map[(z*(max_y*max_x)) + (y * max_x) + x];
                            [tp->lq addObject:obj];
                            [self oi_Delete:obj];
                            rhPtr->rhObjectList[next] = NULL;
                            fade_size++;
                            if (obj->roc->rcSprite != NULL) {
                                [self winFreeSprite:obj->roc->rcSprite];
                            }
                            rhPtr->rhNObjects--;
                            rdObj->hoOiList->oilNObjects--;
                        }
                    }
                }
            }
        }
        next++;
        if (i >= end_obj)break;
    } while (true);
}
-(void)oi_Delete:(CObject*)pHo {
    CRun    *rhPtr = ho->hoAdRunHeader;
    CObjInfo *poil = pHo->hoOiList;
    if (pHo->hoNumPrev >= 0) {
        CObject *prev = rhPtr->rhObjectList[pHo->hoNumPrev];
        if (pHo->hoNumNext >= 0) {
            CObject *next = rhPtr->rhObjectList[pHo->hoNumNext];
            if (prev != NULL)
                prev->hoNumNext = pHo->hoNumNext;
            if (next != NULL)
                next->hoNumPrev = pHo->hoNumPrev;
        }else {
            if (prev != NULL) {
                prev->hoNumNext = (short)0x8000;
            }
        }
    }else {
        if (pHo->hoNumNext >= 0) {
            CObject *next = rhPtr->rhObjectList[pHo->hoNumNext];
            if (next != NULL) {
                next->hoNumPrev = pHo->hoNumPrev;
                poil->oilObject = next->hoNumber;
            }
        }else {
            poil->oilObject = (short)0x8000;
        }
    }
}
-(void)oi_Insert:(CObject*)pHo {
    CRun    *rhPtr = ho->hoAdRunHeader;
    short oi = pHo->hoOi;
    int num = oinum_tbl[ oi ];
    CObjInfo *poil = rhPtr->rhOiList[num];
    if ((poil->oilObject & 0x8000) != 0) {
        poil->oilObject = pHo->hoNumber;
        pHo->hoNumPrev = (short)(num | 0x8000);
        pHo->hoNumNext = (short)0x8000;
    }else{
        CObject *pHo2 = rhPtr->rhObjectList[poil->oilObject];
        pHo->hoNumPrev = pHo2->hoNumPrev;
        pHo2->hoNumPrev = pHo->hoNumber;
        pHo->hoNumNext = pHo2->hoNumber;
        poil->oilObject = pHo->hoNumber;
    }
}
-(void)ChangePixedValue {
    if ( [phin_fixed_list count] <= 0 )return;
    int i = 0 , pos , i2 , i3;
    int next = 0;
    CRun    *rhPtr = ho->hoAdRunHeader;
    int end_obj = rhPtr->rhNObjects;
    CObject *obj , *rdObj ;
    CValue *obj_val;
    NSMutableArray *itr;
    NSNumber *t;
    do {
        obj = rhPtr->rhObjectList[next];
        if (obj != NULL ) {
            i++;
            if (obj->hoType == 0x0002) {
                rdObj = obj;
                itr = [fixed_map objectForKey:[NSNumber numberWithInteger:obj->hoOi]];
                if (itr != NULL) {
                    for ( i2 = 0 ; i2 < [itr count] ; i2++ ) {
                        t = [itr objectAtIndex:i2];
                        obj_val = rdObj->rov->rvValues[ [t intValue] ];
                        pos = 0;
                        for ( i3 = 0 ; i3 < [phin_fixed_list count] ; i3++ ) {
                            t = [phin_fixed_list objectAtIndex:i3];
                            if ( obj_val->intValue == [t intValue] ) {
                                t = [phchange_fixed_list objectAtIndex:pos];
                                obj_val->intValue = [t intValue];
                                break;
                            }
                            pos++;
                        }
                    }
                }
            }
        }
        next++;
        if (i >= end_obj)break;
    } while (true);
    [phin_fixed_list removeAllObjects];
    [phchange_fixed_list removeAllObjects];
}
// 再加速
-(void)winFreeSprite:(CSprite*)spr {
    CSprite *prev = spr->objPrev;
    CSprite *next = spr->objNext;
    if (prev != NULL) {
        prev->objNext = next;
    }
    if (next != NULL) {
        next->objPrev = prev;
    }
    if( spr == ho->hoAdRunHeader->spriteGen->firstSprite ){
        ho->hoAdRunHeader->spriteGen->firstSprite = next;
    }
}
-(void)linkLastSprite:(CSprite*)spr layer:(int)layer {
    CSprite *last_obj = [self GetFirstSprite_EX:layer dwFlags:0];
    if (last_obj == NULL) {
        return;
    }
    if(last_obj->objNext != NULL) {
        spr->objNext = last_obj->objNext;
        last_obj->objNext->objPrev = spr;
    }else {
        spr->objNext = NULL;
    }
    last_obj->objNext = spr;
    spr->objPrev = last_obj;
}
-(CSprite*)GetFirstSprite_EX:(int)nLayer dwFlags:(int)dwFlags {
    if( cash_spr_lay[nLayer] != NULL ) return cash_spr_lay[nLayer];
    CSprite *f = [ho->hoAdRunHeader->spriteGen getFirstSprite:-1 withFlags:0];
    while (f != NULL) {
        if (f->sprLayer == nLayer || f->sprLayer > nLayer) {
            break;
        }
        f = f->objNext;
        cash_spr_lay[nLayer] = f;
    }
    return f;
}


@end


