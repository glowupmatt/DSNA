export default (fn) => {
  return (done) => {
    fn().then(done, (err) => {
      done(err);
    });
  };
};
