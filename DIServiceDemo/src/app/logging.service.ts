export class LoggingService {
    name : string = 'Krishna...!';
    logInfo(message : String): void {
        console.log("Info : "+message);
    } 
    logDebug(message : string) : void {
        console.log("Debug : "+message);
    }
    logError(message : string) : void {
        console.log("Error : "+message);
    }
    setName(name : string) : void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}