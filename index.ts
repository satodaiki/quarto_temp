import * as readline from 'readline';

class Main {
    private static lines: Array<String> = [];

    public static main(): void {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        var reader = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        reader.on('line', (line) => {
          this.lines.push(line);
        });
        reader.on('close', () => {
          console.log(this.lines);
        });
    }
}

Main.main();