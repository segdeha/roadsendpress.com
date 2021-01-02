const calculateCopyrightYears = () => {
  return `2020 – ${(new Date).getFullYear()}`;
};

exports.copyright = `Copyright &copy; ${calculateCopyrightYears()}. All rights reserved.`;
