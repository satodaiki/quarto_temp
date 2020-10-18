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

class Score {
  public suugaku: number;
  public kokugo: number;
  public eigo: number;
  public rank?: number;
  
  public constructor(suugaku: number, kokugo: number, eigo: number) {
    this.suugaku = suugaku;
    this.eigo = eigo;
    this.kokugo = kokugo;
  }
}

class ClassTest {
  public scoreList: Score[]
  public constructor(scoreList: Score[]) {
    this.scoreList = scoreList;
  }

  public scoring() {
    this.scoreList.sort((a, b) => a.eigo - b.eigo).map()
    for (const score of this.scoreList) {
    }
  }
}

Main.main();