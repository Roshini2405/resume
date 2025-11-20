hdfs dfs -rm -r /mydata/output_wordcount
hadoop jar /home/srika/hadoop/share/hadoop/tools/lib/hadoop-streaming-3.3.6.jar \
  -files /home/srika/mapper.py,/home/srika/reducer.py \
  -input /mydata/sample.txt \
  -output /mydata/output_wordcount \
  -mapper mapper.py \
  -reducer reducer.py
hdfs dfs -cat /mydata/output_wordcount/part-00000

#!/usr/bin/env python3
import sys

# Read each line from stdin
for line in sys.stdin:
    for word in line.strip().split():
        print(f"{word}\t1")
#!/usr/bin/env python3
import sys

current_word = None
current_count = 0

for line in sys.stdin:
    word, count = line.strip().split("\t")
    count = int(count)

    if current_word == word:
        current_count += count
    else:
        if current_word:
            print(f"{current_word}\t{current_count}")
        current_word = word
        current_count = count

if current_word:
    print(f"{current_word}\t{current_count}")
