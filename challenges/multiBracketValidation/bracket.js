
function multiBracketValidation(input) {
    let validation = new Stack();
    let str = input.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
            validation.push(str[i])
        }
        if (str[i] === ']' || str[i] === ')' || str[i] === '}') {
          if(validation.top){
        // console.log(validation.top)

            switch (str[i]) {
                case ']':
                    if (validation.top.value != '[') {
                        return false;
                    }
                    break;
                case ')':
                    if (validation.top.value != '(') {
                        return false;
                    }
                    break;
                case '}':
                    if (validation.top.value != '{') {
                        return false;
                    }
                    break;
                
            }
          }
        }

    }
    if (!validation.top) {
        return false;
    }
    return true;
}