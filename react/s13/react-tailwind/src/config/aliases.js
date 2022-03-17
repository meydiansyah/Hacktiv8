const aliases = (prefix = `src`) => ({
	"@components": `${prefix}/components`,
	"@config": `${prefix}/config`,
	"@assets": `${prefix}/assets`,
	// '@enums': `${prefix}/enums`,
	// '@hooks': `${prefix}/hooks`,
	// '@icons': `${prefix}/components/atoms/Icons`,
	// '@styles': `${prefix}/styles`,
	// '@utils': `${prefix}/utils`,
	// '@state': `${prefix}/state`,
	// '@types': `${prefix}/types`,
	// '@storybookHelpers': `../.storybook/helpers`,
});

module.exports = aliases;
