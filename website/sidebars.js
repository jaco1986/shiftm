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
        "about/trust_and_verificaton",
        "about/faq",
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
        {
          type: 'category',
          label: 'Reviews',
          items: [
            "profile/reviews",
                  "profile/reviews/forclients",
                  "profile/reviews/forlocums",
          ],
        },
        "profile/verification_documents",
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
