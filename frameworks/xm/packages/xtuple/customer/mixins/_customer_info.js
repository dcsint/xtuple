// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.CustomerInfo
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._CustomerInfo = {
  /** @scope XM.CustomerInfo.prototype */
  
  className: 'XM.CustomerInfo',

  nestedRecordNamespace: XM,

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
    @type String
  */
  number: SC.Record.attr(String),

  /**
    @type String
  */
  name: SC.Record.attr(String),

  /**
    @type Boolean
  */
  isActive: SC.Record.attr(Boolean),

  /**
    @type XM.ContactInfo
  */
  billingContact: SC.Record.toOne('XM.ContactInfo', {
    isNested: true
  }),

  /**
    @type Boolean
  */
  isFreeFormShipto: SC.Record.attr(Boolean),

  /**
    @type Boolean
  */
  isFreeFormBillto: SC.Record.attr(Boolean),

  /**
    @type XM.Currency
  */
  currency: SC.Record.toOne('XM.Currency'),

  /**
    @type XM.Terms
  */
  terms: SC.Record.toOne('XM.Terms'),

  /**
    @type String
  */
  creditStatus: SC.Record.attr(String),

  /**
    @type XM.SalesRep
  */
  salesRep: SC.Record.toOne('XM.SalesRep'),

  /**
    @type Percent
  */
  commission: SC.Record.attr(Percent),

  /**
    @type Percent
  */
  discount: SC.Record.attr(Percent),

  /**
    @type XM.TaxZone
  */
  taxZone: SC.Record.toOne('XM.TaxZone'),

  /**
    @type XM.ShipCharge
  */
  shipCharge: SC.Record.toOne('XM.ShipCharge')

};
