// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.ApplyCreditReceivable
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._ApplyCreditReceivable = {
  /** @scope XM.ApplyCreditReceivable.prototype */
  
  className: 'XM.ApplyCreditReceivable',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": "ApplyARMemos",
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
    @type XM.CustomerInfo
  */
  customer: SC.Record.toOne('XM.CustomerInfo'),

  /**
    @type Date
  */
  documentDate: SC.Record.attr(XT.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false
  }),

  /**
    @type Date
  */
  dueDate: SC.Record.attr(XT.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false
  }),

  /**
    @type String
  */
  documentType: SC.Record.attr(String),

  /**
    @type String
  */
  number: SC.Record.attr(String),

  /**
    @type Money
  */
  amount: SC.Record.attr(Money),

  /**
    @type XM.Currency
  */
  currency: SC.Record.toOne('XM.Currency'),

  /**
    @type Number
  */
  currencyRate: SC.Record.attr(Number),

  /**
    @type XM.ReceivableApplication
  */
  applications: SC.Record.toMany('XM.ReceivableApplication', {
    isNested: true,
    inverse: 'receivable'
  }),

  /**
    @type XM.ReceivablePendingApplication
  */
  pendingApplications: SC.Record.toMany('XM.ReceivablePendingApplication', {
    isNested: true,
    inverse: 'receivable'
  })

};
