//掉血demo-----进度条的变化
var dropBlood = cc.Sprite.extend({
    blood : 100, //现有血量
    allBlood : 100,
    bloodSprite : null,
    timer : null,
    ctor : function(){
        this._super();
        var bloodBar = new cc.Sprite(res.bloodBar);
        this.addChild(bloodBar);
        var bloodSprite = new cc.Sprite(res.blood);
        bloodSprite.setAnchorPoint(cc.p(0,0));
        bloodSprite.x = -57;
        bloodSprite.y = -12;
        this.bloodSprite = bloodSprite;
        this.addChild(bloodSprite);
        /*var timer = new cc.ProgressTimer(bloodSprite);
         timer.type = cc.ProgressTimer.TYPE_BAR;//进度条的形式(由里向外)
         timer.midPoint = cc.p(0,0);//中间点
         timer.barChangeRate = cc.p(1,0);//改变率，指方向（x，y）
         this.timer = timer;
         this.addChild(timer);*/

    },
    dropBloodAction:function(){
        //可变
        cc.log("dropBloodAction"+this.blood);
        /*var timerAction = new cc.progressFromTo(2,this.blood,this.blood-20);//2秒内，百分比到另一个百分比
         this.blood-=20;
         this.timer.runAction(timerAction);*/
        this.blood-=20;
        this.bloodSprite.setScaleX(this.blood/this.allBlood);
    },
    getBlood : function(){
        return this.blood;
    },
    setBlood : function(blood){
        this.blood = blood;
    },
    getAllBlood : function(){
        return this.allBlood;
    },
    setAllBlood : function(allBlood){
        this.allBlood = allBlood;
    },
});