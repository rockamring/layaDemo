import os

class ProtoBufBuild:
    def __init__(self):
        self.protolist = []

    def find_proto(self, path):
        for root, dirs, files in os.walk(path):
            for filename in files:
                self.protolist.append(os.path.join(path, filename))

def main():
    builder = ProtoBufBuild()
    builder.find_proto('proto')
    pathstr = ""
    for pathname in builder.protolist:
        if pathstr.strip() == "":
            pathstr = pathname
        else:
            pathstr = '%s %s' % (pathstr, pathname)

    print '!!!build protos: %s !!!' % pathstr
    # command pbjs pbts need add to System PATH
    print '!!!excute pbjs!!!'
    os.system('pbjs -t static-module -w commonjs -o protocol.js %s' % pathstr)
    print '!!!execute pbts!!!'
    os.system("pbts -o protocol.d.ts protocol.js")
    print '!!!build success!!!'


if __name__ == '__main__':
    main()
