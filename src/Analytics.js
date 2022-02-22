export default function logEvent(path, title){
    try{
        window.goatcounter.count({
            path: path,
            title: title,
            event: true,
          });
    }catch{
        console.error("Failed to log analytics event: " + path + " (" + title + ").");
    }

}