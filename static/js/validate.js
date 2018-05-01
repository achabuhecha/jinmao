import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'; //引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
	locale: 'zh_CN'
};

Vue.use(VeeValidate, config);



const dictionary = {
   zh_CN: {
      messages: {
//      email: () => '请输入正确的邮箱格式',
        required: ( field )=> "请输入" + field,
//      pageUrl:( field )=> "请输入" + field,
        max:(field)=> "请输入"+field
      },
      attributes:{
        orderNum:'1~99之间的正整数（包括1和99）',
        menuName:'菜单名称',
        secondMenuName:"子菜单名称",
        menuTextarea:"需要设置的文字",
        pageUrl:"正确的页面地址",
        loginName:"正确的账号",
        loginPwd:"正确的密码",
        loginYzm:"正确的验证码",
        max600:"1~600个字",
        ruleName:"1~60个字",
        rule_keyWord0:"1~30个字",
        rule_keyWord1:"1~30个字",
        rule_keyWord2:"1~30个字",
        rule_keyWord3:"1~30个字",
        rule_keyWord4:"1~30个字",
        rule_keyWord5:"1~30个字",
        rule_keyWord6:"1~30个字",
        rule_keyWord7:"1~30个字",
        rule_keyWord8:"1~30个字",
        rule_keyWord9:"1~30个字",
        rule_keyword_replyContent:"1~300个字"
      }
  }
};


Validator.updateDictionary(dictionary);

// Validator.extend('ruleName', {
//   messages: {
//     zh_CN:field =>'请输入' + field,
//   },
//   validate: value => {
//     return /^[1-9][0-9]?$/.test(value);
//   }
// });
Validator.extend('orderNum', {
  messages: {
    zh_CN:field =>'请输入' + field,
  },
  validate: value => {
    return /^[1-9][0-9]?$/.test(value);
  }
});
Validator.extend('loginName', {
  messages: {
    zh_CN:field =>'请输入' + field,
  },
  validate: value => {
    // return /admin/.test(value);
    return /^[a-zA-Z][a-zA-Z0-9]{0,10}?$/.test(value);
  }
});
Validator.extend('loginPwd', {
  messages: {
    zh_CN:field =>'请输入' + field,
  },
  validate: value => {
    // return /admin/.test(value);
    return /^[a-zA-Z][a-zA-Z0-9]{0,10}?$/.test(value);
  }
});
Validator.extend('loginYzm', {
  messages: {
    zh_CN:field =>'请输入' + field,
  },
  validate: value => {
    // return /admin/.test(value);
    return /[a-zA-Z0-9]{4}?$/.test(value);
  }
});
Validator.extend('secondMenuName', {
  messages: {
    zh_CN:field =>field + '最多可设置16个字节(1个汉字为两个字节)',
  },
  validate: value => {
	var entryLen=value.length;  
    var cnChar=value.match(/[^\x00-\x80]/g);//利用match方法检索出中文字节并返回一个存放中文的数组
    var cnCharLen;
    if(cnChar!=""&&cnChar!=undefined&&cnChar!=null){
    	cnCharLen =cnChar.length;//算出实际的字节长度(中文)
    }else{
    	cnCharLen = 0;
    }
	var enLen = entryLen-cnCharLen;
	var realLen = cnCharLen*2 + enLen
	var exp = /^[\u0391-\uFFE5A-Za-z0-9]+$/.test(value);
	if(exp){
    	if(realLen>0&&realLen<17){
			  return true
	    }else{
	    	return false
	    }
    }else{
    	return false
    }
  }
});
Validator.extend('menuName', {
  messages: {
    zh_CN:field =>field + '最多可设置8个字节(1个汉字为两个字节)',
  },
  validate: value => {
	var entryLen=value.length;  
    var cnChar=value.match(/[^\x00-\x80]/g);//利用match方法检索出中文字节并返回一个存放中文的数组
    var cnCharLen;
    if(cnChar!=""&&cnChar!=undefined&&cnChar!=null){
    	cnCharLen =cnChar.length;//算出实际的字节长度(中文)
    }else{
    	cnCharLen = 0;
    }
	var enLen = entryLen-cnCharLen;
	var realLen = cnCharLen*2 + enLen
	var exp = /^[\u0391-\uFFE5A-Za-z0-9]+$/.test(value);
	if(exp){
    	if(realLen>0&&realLen<9){
			  return true
	    }else{
	    	return false
	    }
    }else{
    	return false
    }
  }
});
Validator.extend('pageUrl', {
  messages: {
    zh_CN:field =>'请输入' + field,
  },
  validate: value => {
    return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
  }
});