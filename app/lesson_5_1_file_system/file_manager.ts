import * as fse from "fs-extra";
import fs from "fs";

// открыть файл
// open(filename, flag, callback)
// filename - имя файла
// flag - флаг, который указывает каким образом открывать файлы
// r - открыть для чтения. Генерирует исключение при отсутствии файла;
// r+ - открыть для чтения и записи. Генерирует исключение при отсутствии файла;
// rs - открыть для чтения в синхронном режиме;
// rs+ - открыть для чтения и записи в синхронном режиме;
// w - открыть для записи. Если файл не существует, он будет создан. Если файл существует, его содержимое будет очищено;
// w+ - открыть для чтения и записи. Если файл не существует, он будет создан. Если файл существует, его содержимое
//                                                                                                        будет очищено;
// а - открыть для записи в конец файла. Если файл не существует, он будет создан;
// а+ - открыть для чтения и записи в конец файла. Если файл не существует, он будет создан
// callback - функция, которая вызывается после завершения чтения

export class FileManager {

    public static async copyFile(src: string, dest: string): Promise<boolean> {
        return fse.copy(src, dest)
            .then(() => {
                return true;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }

    public static async writeFile(dest: string, content: string): Promise<number> {
        return new Promise<number>((resolve) => {
            fs.open(dest, "w+", (err, fd) => {
                if (err) {
                    resolve(-1);
                } else {
                    // Метод write - альтернатива методу writeFile; позволяет записать данные в файл и принимает
                    //                                                                                 такие аргументы:
                    // fd - дескриптор файла
                    // buffer - данные в виде буфера или строки,
                    // offset, length - определяют часть буфера, которую следует записать в файл
                    // position - отступ от начала файла, куда будут записаны данные
                    // callback - функция, принимающая аргументы err, written, string
                    fs.write(fd, content, (error: any, writen: number, result: string) => {
                        if (error) {
                            resolve(-1);
                        } else {
                            resolve(writen);
                        }
                    });
                }
            });
        });

    }

}
