$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Feature/Category.feature");
formatter.feature({
  "line": 2,
  "name": "Category list menu",
  "description": "",
  "id": "category-list-menu",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"\u003cCategories\u003e\" category",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"\u003crespective\u003e\" sub-category",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;",
  "rows": [
    {
      "cells": [
        "Categories",
        "respective",
        "extension"
      ],
      "line": 15,
      "id": "category-list-menu;verify--category-page-with-product;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers",
        "computers"
      ],
      "line": 16,
      "id": "category-list-menu;verify--category-page-with-product;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics",
        "electronics"
      ],
      "line": 17,
      "id": "category-list-menu;verify--category-page-with-product;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel",
        "apparel"
      ],
      "line": 18,
      "id": "category-list-menu;verify--category-page-with-product;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads",
        "digital-downloads"
      ],
      "line": 19,
      "id": "category-list-menu;verify--category-page-with-product;;5"
    },
    {
      "cells": [
        "Books",
        "Books",
        "books"
      ],
      "line": 20,
      "id": "category-list-menu;verify--category-page-with-product;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry",
        "jewelry"
      ],
      "line": 21,
      "id": "category-list-menu;verify--category-page-with-product;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards",
        "gift-cards"
      ],
      "line": 22,
      "id": "category-list-menu;verify--category-page-with-product;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7771021921,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Computers\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Computers\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"computers\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 327137134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1219765887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 82377919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "computers",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 11441650,
  "status": "passed"
});
formatter.after({
  "duration": 809411114,
  "status": "passed"
});
formatter.before({
  "duration": 5535327482,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Electronics\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Electronics\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"electronics\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 67178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1606630895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 81294680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "electronics",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8721424,
  "status": "passed"
});
formatter.after({
  "duration": 740753285,
  "status": "passed"
});
formatter.before({
  "duration": 4796749071,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Apparel\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Apparel\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"apparel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 76975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1542433378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 63717011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparel",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8312760,
  "status": "passed"
});
formatter.after({
  "duration": 746553416,
  "status": "passed"
});
formatter.before({
  "duration": 4624854681,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Digital downloads\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Digital downloads\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"digital-downloads\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 51783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1084279884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 67399649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digital-downloads",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 7693700,
  "status": "passed"
});
formatter.after({
  "duration": 784447176,
  "status": "passed"
});
formatter.before({
  "duration": 4915857270,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Books\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Books\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"books\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 60646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1751315095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 74673489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "books",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 11303563,
  "status": "passed"
});
formatter.after({
  "duration": 750531823,
  "status": "passed"
});
formatter.before({
  "duration": 4595645493,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 21,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Jewelry\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Jewelry\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"jewelry\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 63445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 916063934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 71532936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jewelry",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 15404194,
  "status": "passed"
});
formatter.after({
  "duration": 764857444,
  "status": "passed"
});
formatter.before({
  "duration": 4800012316,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Gift Cards\" category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able see \"Gift Cards\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see url with \"gift-cards\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userOnHomePage()"
});
formatter.result({
  "duration": 57847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnCategory(String)"
});
formatter.result({
  "duration": 1849676615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 67549865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gift-cards",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 11537751,
  "status": "passed"
});
formatter.after({
  "duration": 752681972,
  "status": "passed"
});
});