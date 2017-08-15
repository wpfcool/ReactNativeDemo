//
//  CalendarManager.m
//  DouBanDemo
//
//  Created by wenpeifang on 2017/8/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();

//-(void)addEvent:(NSString * )name location:(NSString * )location{
//}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);

  NSLog(@"=========");
  dispatch_async(dispatch_get_main_queue(), ^{
      [[[UIAlertView alloc]initWithTitle:name message:location delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil] show];
  });

}

@end
