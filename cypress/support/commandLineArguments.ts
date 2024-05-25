const commandLineArguments = {
    baseUrl: '',
    env: '',
    username: '',
    password: ''
}

class CommandLineArgumentsProcessor {
    static {
        this.#processArguments();
    }

    static #processArguments() {
        let args = process.argv.slice(2);
        args.forEach(arg => {
            const argSplit = arg.split('=');
            if(argSplit.length > 1) {
                const flag = argSplit[0].replace(/-/g, '');
                const value = argSplit.slice(1).join('=');

                switch(flag.toLowerCase()) {
                    case 'baseUrl':
                        commandLineArguments.baseUrl = value;
                        break;
                    case 'env': 
                        commandLineArguments.env = value;
                        break;
                    case 'username': 
                        commandLineArguments.username = value;
                        break;
                    case 'password': 
                        commandLineArguments.password = value;
                        break;
                }
            }
        })

    }
}

new CommandLineArgumentsProcessor();

export default commandLineArguments;