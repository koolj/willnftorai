import org.apache.spark.ml.feature.UnivariateFeatureSelector
import org.apache.spark.ml.linalg.Vectors

val data = Seq(
  (1, Vectors.dense(1.7, 4.4, 7.6, 5.8, 9.6, 2.3), 3.0),
  (2, Vectors.dense(8.8, 7.3, 5.7, 7.3, 2.2, 4.1), 2.0),
  (3, Vectors.dense(1.2, 9.5, 2.5, 3.1, 8.7, 2.5), 3.0),
  (4, Vectors.dense(3.7, 9.2, 6.1, 4.1, 7.5, 3.8), 2.0),
  (5, Vectors.dense(8.9, 5.2, 7.8, 8.3, 5.2, 3.0), 4.0),
  (6, Vectors.dense(7.9, 8.5, 9.2, 4.0, 9.4, 2.1), 4.0)
)

val df = spark.createDataset(data).toDF("id", "features", "label")

val selector = new UnivariateFeatureSelector()
  .setFeatureType("continuous")
  .setLabelType("categorical")
  .setSelectionMode("numTopFeatures")
  .setSelectionThreshold(1)
  .setFeaturesCol("features")
  .setLabelCol("label")
  .setOutputCol("selectedFeatures")

val result = selector.fit(df).transform(df)

println(s"UnivariateFeatureSelector output with top ${selector.getSelectionThreshold}" +
  s" features selected using f_classif")
result.show()
class imgUnique {

}