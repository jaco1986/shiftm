module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: [
        "about",
        "about/what-is-shiftm",
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
        "setup",
        {
          type: 'category',
          label: 'Installation',
          items: [
            "setup/installation",
            {
              type: 'category',
              label: 'Package Managers',
              items: [
                "setup/installation/package-managers",
                  "setup/installation/package-managers/dpkg",
                  "setup/installation/package-managers/homebrew",
                  "setup/installation/package-managers/msi",
                  "setup/installation/package-managers/nix",
                  "setup/installation/package-managers/rpm",
              ],
            },
            {
              type: 'category',
              label: 'Platforms',
              items: [
                "setup/installation/platforms",
                  "setup/installation/platforms/docker",
              ],
            },
            {
              type: 'category',
              label: 'Operating Systems',
              items: [
                "setup/installation/operating-systems",
                  "setup/installation/operating-systems/amazon-linux",
                  "setup/installation/operating-systems/centos",
                  "setup/installation/operating-systems/debian",
                  "setup/installation/operating-systems/macos",
                  "setup/installation/operating-systems/nixos",
                  "setup/installation/operating-systems/rhel",
                  "setup/installation/operating-systems/raspbian",
                  "setup/installation/operating-systems/ubuntu",
                  "setup/installation/operating-systems/windows",
              ],
            },
            {
              type: 'category',
              label: 'Manual',
              items: [
                "setup/installation/manual",
                "setup/installation/manual/from-archives",
                "setup/installation/manual/from-source",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            "setup/deployment",
            "setup/deployment/strategies",
            "setup/deployment/topologies",
          ]
        },
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
      items: [
        "administration",
        "administration/process-management",
        "administration/monitoring",
        "administration/tuning",
        "administration/updating",
        "administration/validating",
      ],
    },
  ]
};
