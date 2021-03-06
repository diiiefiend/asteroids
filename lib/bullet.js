(function () {
  window.Asteroids = window.Asteroids || {};

  var Bullet = window.Asteroids.Bullet = function (pos, vel, dir1, game) {
    var dir = dir1 * (Math.PI/180);     //convert to radians
    var vel1 = [];
    var pos1 = [];

    if (vel[0] !== 0){
      vel1[0] =  Math.sin(dir) * 2 * Math.max(Math.abs(vel[0]), 2);
    } else {
      vel1[0] =  Math.sin(dir) * 2;
    };

    if (vel[1] !== 0){
      vel1[1] = -1 * Math.cos(dir) * 2 * Math.max(Math.abs(vel[1]), 2);
    } else {
      vel1[1] = -1 * Math.cos(dir) * 2;
    };

    pos1[0] = pos[0] + vel1[0] * 3;
    pos1[1] = pos[1] + vel1[1] * 3;

    window.Asteroids.MovingObject.call(this, pos1, vel1, Bullet.RADIUS, Bullet.COLOR, game);

    this.isWrappable = false;
  };

  Bullet.RADIUS = 2;
  Bullet.COLOR = "yellow";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
