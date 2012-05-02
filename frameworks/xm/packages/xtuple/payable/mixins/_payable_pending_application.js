// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.PayablePendingApplication
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._PayablePendingApplication = {
  /** @scope XM.PayablePendingApplication.prototype */
  
  className: 'XM.PayablePendingApplication',

  

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type XM.Payment
  */
  payment: SC.Record.toOne('XM.Payment'),

  /**
    @type XM.Payable
  */
  payable: SC.Record.toOne('XM.Payable'),

  /**
    @type Number
  */
  amount: SC.Record.attr(Number),

  /**
    @type Number
  */
  discount: SC.Record.attr(Number)

};
