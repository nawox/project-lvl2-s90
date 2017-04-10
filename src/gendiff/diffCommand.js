import command from 'commander';

export default () => {
  command
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference')
    .arguments('<first_config> <second_config>')
    .option('-f,--format [type]', 'Output format')
    .parse(process.argv);
};
