//1 tareeka aur hai karne kaa

const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({ message: "something went wrong" });
    }
  };
};

export { asyncHandler };

