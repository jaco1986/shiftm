module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: [
        "about",
        "about/what-is-shiftm",
        "about/support",
        "about/terms_and_cond",
        "about/privacy",
        "about/safety",
        "meta/glossary",
      ],
    },
    {
      type: 'category',
      label: 'Profile',
      items: [
        "profile/your_profile",
        "profile/messages",
        "profile/picture",
        "profile/reviews",
        "profile/verification_documents",
        "about/trust_and_verificaton",
      ],
    },
    {
      type: 'category',
      label: 'Shifts',
      items: [
        "shifts/shift",
        {
          type: 'category',
          label: 'Listing',
          items: [
                  "shifts/listings",
                  "shifts/listing/create",
                  "shifts/listing/edit",
                  "shifts/listing/publish",
                  "shifts/listing/upcoming",
                  "shifts/listing/previous",
          ],
        },
        {
          type: 'category',
          label: 'Calendar',
          items: [
              "shifts/calendar",
              "shifts/calendar/calendar",
              "shifts/calendar/dates",
          ],
        },
        "shifts/rates",
        "payments/invoice",

      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        "setup/dashboard",
        "setup/currency",
        "setup/favorites",
        "setup/language",
        "setup/password",
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      items:  [
              {
                type: 'category',
                label: 'Payouts',
                items: [
                    "payments/payouts",
                    "payments/payouts/future",
                    "payments/payouts/history",
                ],
              },
              {
                type: 'category',
                label: 'Reports',
                items: [
                    "payments/reports",
                    "payments/reports/gross_earnings",
                    "payments/reports/export",
                ],
              },
              "payments/bank_account",
              "payments/invoice",
            ],
    },
  ]
};