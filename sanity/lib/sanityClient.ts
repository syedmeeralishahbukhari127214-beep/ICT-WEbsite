
const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "tygmtn6b",
  dataset: "production",
  apiVersion: "2026-01-10",
  token: "sk8XZwKXEHluuXXPZQH7Dk8Q28W4CaX0pi5nqIytlMKhy3ag1GWpf01p7K24ZwiBXMLLIX54TUClyJPl5OVnmpbk0liEk4Lxe8vsnKNb7NXWz7BUJkhpJrtfVXrH5lrahrWNOoSk9iSEpkKc8ulAGlPKsyA7FCIVZPlwBie9XOS0kVmb1tji",
  useCdn: false,
});

module.exports = { client };
