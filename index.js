async function main() {
	let data = await new Promise(resolve => setTimeout(() => resolve("hello world")))
	console.log(data)
}
main()
